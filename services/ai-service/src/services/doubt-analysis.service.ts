import { Injectable } from '@nestjs/common';

@Injectable()
export class DoubtAnalysisService {
  async analyzeDoubt(doubtText: string, courseContext?: string): Promise<any> {
    // Mock doubt analysis - integrate with NLP service
    const keywords = this.extractKeywords(doubtText);
    const complexity = this.analyzeComplexity(doubtText);
    const relatedConcepts = this.findRelatedConcepts(keywords, courseContext);
    
    return {
      keywords,
      complexity,
      relatedConcepts,
      suggestedResources: this.suggestResources(keywords, complexity),
      estimatedResolutionTime: this.estimateResolutionTime(complexity),
      priority: this.determinePriority(complexity, keywords),
    };
  }

  private extractKeywords(text: string): string[] {
    // Mock keyword extraction - replace with actual NLP
    const commonWords = new Set(['the', 'is', 'in', 'and', 'or', 'but', 'this', 'that']);
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.has(word));
    
    return [...new Set(words)].slice(0, 10);
  }

  private analyzeComplexity(text: string): string {
    const wordCount = text.split(/\s+/).length;
    const sentenceCount = text.split(/[.!?]+/).length;
    const avgSentenceLength = wordCount / sentenceCount;

    if (avgSentenceLength > 25 || wordCount > 100) return 'high';
    if (avgSentenceLength > 15 || wordCount > 50) return 'medium';
    return 'low';
  }

  private findRelatedConcepts(keywords: string[], courseContext?: string): string[] {
    // Mock concept mapping
    const conceptMap: { [key: string]: string[] } = {
      'derivative': ['calculus', 'differentiation', 'rate of change'],
      'integral': ['calculus', 'integration', 'area under curve'],
      'equation': ['algebra', 'solving', 'variables'],
      'triangle': ['geometry', 'angles', 'trigonometry'],
      'probability': ['statistics', 'chance', 'distribution'],
    };

    const concepts = new Set<string>();
    keywords.forEach(keyword => {
      if (conceptMap[keyword]) {
        conceptMap[keyword].forEach(concept => concepts.add(concept));
      }
    });

    if (courseContext) {
      concepts.add(courseContext);
    }

    return Array.from(concepts);
  }

  private suggestResources(keywords: string[], complexity: string): any[] {
    const resources = [];
    
    keywords.forEach(keyword => {
      resources.push({
        type: 'video',
        title: `Understanding ${keyword}`,
        url: `#${keyword}-video`,
        difficulty: complexity,
      });
      
      resources.push({
        type: 'article',
        title: `${keyword} Explained`,
        url: `#${keyword}-article`,
        difficulty: complexity,
      });
    });

    return resources.slice(0, 5);
  }

  private estimateResolutionTime(complexity: string): number {
    switch (complexity) {
      case 'high': return 60; // minutes
      case 'medium': return 30;
      case 'low': return 15;
      default: return 30;
    }
  }

  private determinePriority(complexity: string, keywords: string[]): string {
    const importantKeywords = ['urgent', 'exam', 'test', 'important', 'critical'];
    const hasImportantKeyword = keywords.some(keyword => 
      importantKeywords.includes(keyword)
    );

    if (hasImportantKeyword || complexity === 'high') return 'high';
    if (complexity === 'medium') return 'medium';
    return 'low';
  }
}