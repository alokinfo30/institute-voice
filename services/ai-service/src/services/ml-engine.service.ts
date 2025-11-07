import { Injectable, OnModuleInit } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';
import { RedisService } from './redis.service';

@Injectable()
export class MLEngineService implements OnModuleInit {
  private performanceModel: tf.LayersModel;
  private recommendationModel: tf.LayersModel;
  private isModelsLoaded = false;

  constructor(private redisService: RedisService) {}

  async onModuleInit() {
    await this.loadModels();
    this.startModelTrainingCycle();
  }

  private async loadModels() {
    try {
      // Load pre-trained models or initialize new ones
      this.performanceModel = await this.loadPerformanceModel();
      this.recommendationModel = await this.loadRecommendationModel();
      this.isModelsLoaded = true;
      
      console.log('🤖 ML Models loaded successfully');
    } catch (error) {
      console.error('Failed to load ML models:', error);
      // Initialize with basic models
      this.initializeBasicModels();
    }
  }

  private async loadPerformanceModel(): Promise<tf.LayersModel> {
    // Try to load from saved model, otherwise create new
    try {
      return await tf.loadLayersModel('file://./models/performance/model.json');
    } catch {
      return this.createPerformanceModel();
    }
  }

  private createPerformanceModel(): tf.LayersModel {
    const model = tf.sequential({
      layers: [
        tf.layers.dense({ inputShape: [10], units: 64, activation: 'relu' }),
        tf.layers.dropout({ rate: 0.3 }),
        tf.layers.dense({ units: 32, activation: 'relu' }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({ units: 16, activation: 'relu' }),
        tf.layers.dense({ units: 3, activation: 'softmax' }) // risk levels
      ]
    });

    model.compile({
      optimizer: 'adam',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    return model;
  }

  async predictStudentRisk(studentData: any): Promise<{
    riskLevel: 'low' | 'medium' | 'high';
    confidence: number;
    factors: string[];
    interventionRecommendations: string[];
  }> {
    if (!this.isModelsLoaded) {
      return this.fallbackRiskPrediction(studentData);
    }

    try {
      // Prepare features for ML model
      const features = this.prepareFeatures(studentData);
      const tensor = tf.tensor2d([features]);
      
      const prediction = this.performanceModel.predict(tensor) as tf.Tensor;
      const results = await prediction.data();
      
      tensor.dispose();
      prediction.dispose();

      const riskProbabilities = Array.from(results);
      const riskIndex = riskProbabilities.indexOf(Math.max(...riskProbabilities));
      const riskLevels = ['low', 'medium', 'high'] as const;
      
      return {
        riskLevel: riskLevels[riskIndex],
        confidence: riskProbabilities[riskIndex],
        factors: this.identifyRiskFactors(studentData),
        interventionRecommendations: this.generateInterventions(studentData, riskLevels[riskIndex])
      };
    } catch (error) {
      console.error('ML prediction failed:', error);
      return this.fallbackRiskPrediction(studentData);
    }
  }

  async generatePersonalizedContent(studentId: string, learningContext: any): Promise<{
    content: any[];
    strategy: string;
    confidence: number;
    adaptivePlan: any;
  }> {
    const cacheKey = `personalized_content:${studentId}`;
    const cached = await this.redisService.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    // Use collaborative filtering and content-based filtering
    const similarStudents = await this.findSimilarStudents(studentId);
    const contentPreferences = await this.analyzeContentPreferences(studentId);
    const weakAreas = await this.identifyWeakAreas(studentId);

    const recommendations = await this.hybridRecommendation(
      studentId,
      similarStudents,
      contentPreferences,
      weakAreas,
      learningContext
    );

    const result = {
      content: recommendations,
      strategy: this.determineLearningStrategy(learningContext),
      confidence: this.calculateRecommendationConfidence(recommendations),
      adaptivePlan: this.createAdaptiveLearningPlan(studentId, recommendations)
    };

    await this.redisService.set(cacheKey, result, 3600); // Cache for 1 hour
    return result;
  }

  private async hybridRecommendation(
    studentId: string,
    similarStudents: string[],
    preferences: any,
    weakAreas: string[],
    context: any
  ): Promise<any[]> {
    // Combine multiple recommendation strategies
    const [collaborativeRecs, contentBasedRecs, knowledgeGraphRecs] = await Promise.all([
      this.collaborativeFiltering(studentId, similarStudents),
      this.contentBasedFiltering(preferences, weakAreas),
      this.knowledgeGraphRecommendations(studentId, context)
    ]);

    // Weighted combination of recommendations
    const weightedRecs = this.combineRecommendations(
      collaborativeRecs,
      contentBasedRecs,
      knowledgeGraphRecs,
      preferences
    );

    return weightedRecs.slice(0, 10); // Return top 10 recommendations
  }

  private async collaborativeFiltering(studentId: string, similarStudents: string[]): Promise<any[]> {
    // Implement user-based collaborative filtering
    const similarStudentPreferences = await Promise.all(
      similarStudents.map(id => this.getStudentLearningPattern(id))
    );

    // Find content that similar students engaged well with
    const popularContent = similarStudentPreferences
      .flatMap(pattern => pattern.highlyRatedContent || [])
      .filter(content => content.engagementScore > 0.8);

    return this.deduplicateAndRank(popularContent);
  }

  private async knowledgeGraphRecommendations(studentId: string, context: any): Promise<any[]> {
    // Use knowledge graph to recommend content based on prerequisite relationships
    const currentKnowledge = await this.getStudentKnowledgeState(studentId);
    const learningGoals = await this.getLearningGoals(studentId);
    
    // Find content that bridges knowledge gaps towards learning goals
    const bridgingContent = await this.findBridgingContent(currentKnowledge, learningGoals);
    
    return bridgingContent;
  }

  async analyzeLearningPattern(studentId: string): Promise<{
    learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
    optimalStudyTime: string[];
    attentionSpan: number;
    retentionRate: number;
    recommendedStrategies: string[];
  }> {
    const learningData = await this.getLearningAnalytics(studentId);
    
    // Analyze engagement patterns across content types
    const engagementByType = this.analyzeEngagementByType(learningData);
    const temporalPatterns = this.analyzeTemporalPatterns(learningData);
    const retentionMetrics = this.calculateRetentionMetrics(learningData);

    return {
      learningStyle: this.determineLearningStyle(engagementByType),
      optimalStudyTime: this.identifyOptimalStudyTimes(temporalPatterns),
      attentionSpan: this.calculateAttentionSpan(learningData),
      retentionRate: retentionMetrics.retentionRate,
      recommendedStrategies: this.generateLearningStrategies(engagementByType, temporalPatterns)
    };
  }

  private startModelTrainingCycle() {
    // Retrain models periodically with new data
    setInterval(async () => {
      try {
        await this.retrainModels();
        console.log('🤖 ML models retrained successfully');
      } catch (error) {
        console.error('Model retraining failed:', error);
      }
    }, 24 * 60 * 60 * 1000); // Retrain every 24 hours
  }

  private async retrainModels() {
    const trainingData = await this.collectTrainingData();
    
    if (trainingData.length > 1000) { // Only retrain with sufficient data
      await this.trainPerformanceModel(trainingData);
      await this.trainRecommendationModel(trainingData);
      
      // Save updated models
      await this.performanceModel.save('file://./models/performance/');
      await this.recommendationModel.save('file://./models/recommendation/');
      
      // Clear relevant caches
      await this.redisService.deletePattern('personalized_content:*');
    }
  }

  // Fallback methods when ML models are unavailable
  private fallbackRiskPrediction(studentData: any) {
    // Simple rule-based fallback
    const riskScore = this.calculateRuleBasedRisk(studentData);
    
    return {
      riskLevel: riskScore < 0.3 ? 'low' : riskScore < 0.7 ? 'medium' : 'high',
      confidence: 0.7,
      factors: this.identifyRiskFactors(studentData),
      interventionRecommendations: this.generateBasicInterventions(studentData)
    };
  }

  // ... Additional ML methods for different use cases
}