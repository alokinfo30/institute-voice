import { Injectable } from '@nestjs/common';

@Injectable()
export class AdaptiveAssessmentService {
  async generateAdaptiveTest(studentId: string, testConfig: any) {
    const studentAbility = await this.estimateStudentAbility(studentId);
    const itemBank = await this.getItemBank(testConfig.topic);
    
    const adaptiveTest = {
      testId: `adaptive-${studentId}-${Date.now()}`,
      studentId,
      config: testConfig,
      items: [],
      currentItemIndex: 0,
      abilityEstimate: studentAbility,
      standardError: 0.5, // Initial standard error
      terminationCriteria: this.setTerminationCriteria(testConfig)
    };

    // Select first item based on initial ability estimate
    const firstItem = this.selectNextItem(itemBank, studentAbility, []);
    adaptiveTest.items.push(firstItem);

    return adaptiveTest;
  }

  async administerNextItem(testSession: any, response: any) {
    const updatedSession = { ...testSession };
    const currentItem = updatedSession.items[updatedSession.currentItemIndex];
    
    // Score the response
    const score = this.scoreResponse(currentItem, response);
    updatedSession.responses = updatedSession.responses || [];
    updatedSession.responses.push({
      itemId: currentItem.id,
      response,
      score,
      timestamp: new Date()
    });

    // Update ability estimate using Item Response Theory
    updatedSession.abilityEstimate = this.updateAbilityEstimate(
      updatedSession.abilityEstimate,
      updatedSession.responses,
      updatedSession.standardError
    );

    // Update standard error
    updatedSession.standardError = this.updateStandardError(
      updatedSession.abilityEstimate,
      updatedSession.responses
    );

    // Check termination criteria
    if (this.shouldTerminateTest(updatedSession)) {
      updatedSession.completed = true;
      updatedSession.finalAbility = updatedSession.abilityEstimate;
      updatedSession.completedAt = new Date();
      
      // Generate comprehensive report
      updatedSession.report = await this.generateAssessmentReport(updatedSession);
    } else {
      // Select next item
      const nextItem = this.selectNextItem(
        await this.getItemBank(updatedSession.config.topic),
        updatedSession.abilityEstimate,
        updatedSession.items.map(item => item.id)
      );
      
      updatedSession.items.push(nextItem);
      updatedSession.currentItemIndex++;
    }

    return updatedSession;
  }

  private selectNextItem(itemBank: any[], currentAbility: number, administeredItems: string[]) {
    const availableItems = itemBank.filter(item => 
      !administeredItems.includes(item.id) &&
      this.isItemAppropriate(item, currentAbility)
    );

    if (availableItems.length === 0) {
      return this.selectRandomItem(itemBank, administeredItems);
    }

    // Use maximum information criterion for item selection
    const itemsWithInfo = availableItems.map(item => ({
      item,
      information: this.calculateItemInformation(item, currentAbility)
    }));

    return itemsWithInfo.sort((a, b) => b.information - a.information)[0].item;
  }

  private calculateItemInformation(item: any, ability: number): number {
    // Item Response Theory information function
    const p = this.calculateProbability(ability, item.difficulty, item.discrimination);
    const q = 1 - p;
    return Math.pow(item.discrimination, 2) * p * q;
  }

  private calculateProbability(ability: number, difficulty: number, discrimination: number): number {
    // 3-parameter logistic model
    const z = discrimination * (ability - difficulty);
    return 1 / (1 + Math.exp(-z));
  }

  async generateAssessmentReport(testSession: any) {
    const abilityEstimate = testSession.finalAbility;
    const responses = testSession.responses;
    
    const report = {
      testId: testSession.testId,
      studentId: testSession.studentId,
      completedAt: testSession.completedAt,
      abilityEstimate: {
        theta: abilityEstimate,
        standardError: testSession.standardError,
        confidenceInterval: this.calculateConfidenceInterval(abilityEstimate, testSession.standardError)
      },
      performance: {
        rawScore: responses.reduce((sum, r) => sum + r.score, 0),
        percentage: (responses.reduce((sum, r) => sum + r.score, 0) / responses.length) * 100,
        itemsAttempted: responses.length,
        averageTimePerItem: this.calculateAverageTime(responses)
      },
      diagnostic: {
        strengths: await this.identifyStrengths(responses),
        weaknesses: await this.identifyWeaknesses(responses),
        knowledgeGaps: await this.identifyKnowledgeGaps(responses),
        misconceptions: await this.identifyMisconceptions(responses)
      },
      recommendations: {
        learningPath: await this.generateLearningPathRecommendations(abilityEstimate, responses),
        practice: await this.generatePracticeRecommendations(responses),
        review: await this.generateReviewRecommendations(responses)
      },
      comparision: {
        percentile: await this.calculatePercentile(abilityEstimate, testSession.config.topic),
        growth: await this.calculateGrowth(testSession.studentId, testSession.config.topic)
      }
    };

    return report;
  }

  async createFormativeAssessment(studentId: string, contentId: string) {
    const content = await this.getContent(contentId);
    const studentProfile = await this.getStudentProfile(studentId);
    
    const assessment = {
      type: 'formative',
      contentId,
      studentId,
      items: await this.generateFormativeItems(content, studentProfile),
      feedbackMechanism: this.setupFormativeFeedback(content),
      learningObjectives: content.learningObjectives,
      adaptive: true
    };

    return assessment;
  }

  private async generateFormativeItems(content: any, profile: any) {
    const items = [];
    
    // Pre-assessment items
    items.push(...await this.generatePreAssessmentItems(content, profile));
    
    // During-learning checkpoints
    items.push(...await this.generateCheckpointItems(content, profile));
    
    // Post-assessment items
    items.push(...await this.generatePostAssessmentItems(content, profile));
    
    return items;
  }

  async provideFormativeFeedback(assessmentResponse: any) {
    const feedback = {
      correctness: this.assessCorrectness(assessmentResponse),
      explanation: await this.generateExplanation(assessmentResponse),
      hints: await this.generateHints(assessmentResponse),
      resources: await this.suggestResources(assessmentResponse),
      nextSteps: await this.suggestNextSteps(assessmentResponse)
    };

    // Adaptive feedback based on student level
    if (assessmentResponse.studentLevel === 'beginner') {
      feedback.hints = this.simplifyHints(feedback.hints);
      feedback.explanation = this.simplifyExplanation(feedback.explanation);
    }

    return feedback;
  }
}