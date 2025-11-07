import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AnalyticsServiceService } from './analytics-service.service';

@Controller()
export class AnalyticsServiceController {
  constructor(private readonly analyticsService: AnalyticsServiceService) {}

  @MessagePattern({ cmd: 'track_progress' })
  async trackProgress(@Payload() data: any) {
    return this.analyticsService.trackProgress(data);
  }

  @MessagePattern({ cmd: 'get_student_progress' })
  async getStudentProgress(@Payload() data: { studentId: string; courseId?: string }) {
    return this.analyticsService.getStudentProgress(data.studentId, data.courseId);
  }

  @MessagePattern({ cmd: 'get_performance_metrics' })
  async getPerformanceMetrics(@Payload() data: { studentId: string; courseId?: string }) {
    return this.analyticsService.getPerformanceMetrics(data.studentId, data.courseId);
  }

  @MessagePattern({ cmd: 'get_course_analytics' })
  async getCourseAnalytics(@Payload() data: { courseId: string }) {
    return this.analyticsService.getCourseAnalytics(data.courseId);
  }

  @MessagePattern({ cmd: 'get_institute_analytics' })
  async getInstituteAnalytics(@Payload() data: { instituteId: string }) {
    return this.analyticsService.getInstituteAnalytics(data.instituteId);
  }

  @MessagePattern({ cmd: 'update_performance' })
  async updatePerformance(@Payload() data: { studentId: string; courseId: string; score: number; totalQuestions: number; correctAnswers: number }) {
    return this.analyticsService.updatePerformance(data);
  }
}