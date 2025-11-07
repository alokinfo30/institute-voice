import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AiServiceService } from './ai-service.service';

@Controller()
export class AiServiceController {
  constructor(private readonly aiService: AiServiceService) {}

  @MessagePattern({ cmd: 'generate_learning_path' })
  async generateLearningPath(@Payload() data: { studentId: string; performanceData: any }) {
    return this.aiService.generateLearningPath(data.studentId, data.performanceData);
  }

  @MessagePattern({ cmd: 'analyze_doubt' })
  async analyzeDoubt(@Payload() data: { doubtText: string; courseContext?: string }) {
    return this.aiService.analyzeDoubt(data.doubtText, data.courseContext);
  }

  @MessagePattern({ cmd: 'predict_performance' })
  async predictPerformance(@Payload() data: { studentId: string; courseId: string; historicalData: any }) {
    return this.aiService.predictPerformance(data.studentId, data.courseId, data.historicalData);
  }

  @MessagePattern({ cmd: 'recommend_content' })
  async recommendContent(@Payload() data: { studentId: string; currentTopic: string; performanceLevel: number }) {
    return this.aiService.recommendContent(data.studentId, data.currentTopic, data.performanceLevel);
  }

  @MessagePattern({ cmd: 'analyze_weak_areas' })
  async analyzeWeakAreas(@Payload() data: { studentId: string; performanceMetrics: any }) {
    return this.aiService.analyzeWeakAreas(data.studentId, data.performanceMetrics);
  }

  @MessagePattern({ cmd: 'generate_practice_questions' })
  async generatePracticeQuestions(@Payload() data: { topic: string; difficulty: string; count: number }) {
    return this.aiService.generatePracticeQuestions(data.topic, data.difficulty, data.count);
  }
}