import { Injectable, Inject } from '@nestjs/common';
import { Redis } from 'ioredis';
import { AdaptiveLearningService } from './services/adaptive-learning.service';
import { DoubtAnalysisService } from './services/doubt-analysis.service';
import { PerformancePredictionService } from './services/performance-prediction.service';

@Injectable()
export class AiServiceService {
  constructor(
    @Inject('REDIS_CLIENT')
    private redisClient: Redis,
    private adaptiveLearningService: AdaptiveLearningService,
    private doubtAnalysisService: DoubtAnalysisService,
    private performancePredictionService: PerformancePredictionService,
  ) {}

  async generateLearningPath(studentId: string, performanceData: any): Promise<any> {
    const cacheKey = `learning_path:${studentId}`;
    
    // Check cache first
    const cached = await this.redisClient.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const learningPath = await this.adaptiveLearningService.generatePersonalizedLearningPath(
      studentId,
      performanceData
    );

    // Cache for 6 hours
    await this.redisClient.setex(cacheKey, 21600, JSON.stringify(learningPath));
    
    return learningPath;
  }

  async analyzeDoubt(doubtText: string, courseContext?: string): Promise<any> {
    return this.doubtAnalysisService.analyzeDoubt(doubtText, courseContext);
  }

  async predictPerformance(studentId: string, courseId: string, historicalData: any): Promise<any> {
    const cacheKey = `performance_prediction:${studentId}:${courseId}`;
    
    const cached = await this.redisClient.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const prediction = await this.performancePredictionService.predictPerformance(
      studentId,
      courseId,
      historicalData
    );

    // Cache for 1 hour
    await this.redisClient.setex(cacheKey, 3600, JSON.stringify(prediction));
    
    return prediction;
  }

  async recommendContent(studentId: string, currentTopic: string, performanceLevel: number): Promise<any> {
    return this.adaptiveLearningService.recommendContent(
      studentId,
      currentTopic,
      performanceLevel
    );
  }

  async analyzeWeakAreas(studentId: string, performanceMetrics: any): Promise<any> {
    return this.adaptiveLearningService.analyzeWeakAreas(
      studentId,
      performanceMetrics
    );
  }

  async generatePracticeQuestions(topic: string, difficulty: string, count: number): Promise<any> {
    return this.adaptiveLearningService.generatePracticeQuestions(
      topic,
      difficulty,
      count
    );
  }
}