// ai-service/src/adaptive-learning/adaptive-learning.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { TensorFlowService } from '../tensorflow/tensorflow.service';
import { RedisService } from '../../shared/redis/redis.service';

interface LearningPath {
  studentId: string;
  weakTopics: string[];
  recommendedContent: string[];
  confidence: number;
  nextReviewDate: Date;
}

@Injectable()
export class AdaptiveLearningService {
  private readonly logger = new Logger(AdaptiveLearningService.name);

  constructor(
    private tensorFlowService: TensorFlowService,
    private redisService: RedisService,
  ) {}

  async generatePersonalizedLearningPath(
    studentId: string,
    performanceData: any,
  ): Promise<LearningPath> {
    const cacheKey = `learning_path:${studentId}`;
    
    // Check cache first
    const cached = await this.redisService.get<LearningPath>(cacheKey);
    if (cached) {
      return cached;
    }

    // AI-powered analysis
    const weakTopics = await this.analyzeWeakTopics(performanceData);
    const recommendedContent = await this.recommendContent(weakTopics);
    
    const learningPath: LearningPath = {
      studentId,
      weakTopics,
      recommendedContent,
      confidence: await this.calculateConfidence(performanceData),
      nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    };

    // Cache for 6 hours
    await this.redisService.set(cacheKey, learningPath, 21600);
    
    return learningPath;
  }

  private async analyzeWeakTopics(performanceData: any): Promise<string[]> {
    // Use TensorFlow.js for topic analysis
    const model = await this.tensorFlowService.loadTopicAnalysisModel();
    const weakTopics = await model.predict(performanceData);
    return weakTopics;
  }

  private async recommendContent(weakTopics: string[]): Promise<string[]> {
    // Content-based filtering algorithm
    return await this.tensorFlowService.contentRecommendation(weakTopics);
  }
}