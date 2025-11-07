import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Redis } from 'ioredis';
import { StudentProgress } from './entities/student-progress.entity';
import { PerformanceMetric } from './entities/performance-metric.entity';

@Injectable()
export class AnalyticsServiceService {
  constructor(
    @InjectRepository(StudentProgress)
    private progressRepository: Repository<StudentProgress>,
    
    @InjectRepository(PerformanceMetric)
    private performanceRepository: Repository<PerformanceMetric>,
    
    @Inject('REDIS_CLIENT')
    private redisClient: Redis,
  ) {}

  async trackProgress(progressData: Partial<StudentProgress>): Promise<StudentProgress> {
    const existingProgress = await this.progressRepository.findOne({
      where: {
        studentId: progressData.studentId,
        contentId: progressData.contentId,
      },
    });

    if (existingProgress) {
      Object.assign(existingProgress, progressData);
      if (progressData.progress === 100) {
        existingProgress.isCompleted = true;
        existingProgress.completedAt = new Date();
      }
      return this.progressRepository.save(existingProgress);
    } else {
      const progress = this.progressRepository.create(progressData);
      if (progress.progress === 100) {
        progress.isCompleted = true;
        progress.completedAt = new Date();
      }
      return this.progressRepository.save(progress);
    }
  }

  async getStudentProgress(studentId: string, courseId?: string): Promise<any> {
    const where: any = { studentId };
    if (courseId) {
      where.courseId = courseId;
    }

    const progress = await this.progressRepository.find({ where });
    
    // Calculate overall progress
    const totalContents = progress.length;
    const completedContents = progress.filter(p => p.isCompleted).length;
    const overallProgress = totalContents > 0 ? (completedContents / totalContents) * 100 : 0;

    return {
      progress,
      summary: {
        totalContents,
        completedContents,
        overallProgress,
        totalTimeSpent: progress.reduce((sum, p) => sum + p.timeSpent, 0),
      },
    };
  }

  async getPerformanceMetrics(studentId: string, courseId?: string): Promise<any> {
    const where: any = { studentId };
    if (courseId) {
      where.courseId = courseId;
    }

    const metrics = await this.performanceRepository.find({ where });
    
    if (metrics.length === 0) {
      return {
        averageScore: 0,
        averageAccuracy: 0,
        totalAttempts: 0,
        weakAreas: [],
      };
    }

    const averageScore = metrics.reduce((sum, m) => sum + parseFloat(m.score as any), 0) / metrics.length;
    const averageAccuracy = metrics.reduce((sum, m) => sum + parseFloat(m.accuracy as any), 0) / metrics.length;
    const totalAttempts = metrics.reduce((sum, m) => sum + m.totalAttempts, 0);
    
    // Aggregate weak areas
    const weakAreas = metrics.flatMap(m => m.weakAreas || []);
    const weakAreaCounts = weakAreas.reduce((acc, area) => {
      acc[area] = (acc[area] || 0) + 1;
      return acc;
    }, {});

    return {
      averageScore,
      averageAccuracy,
      totalAttempts,
      weakAreas: Object.entries(weakAreaCounts)
        .sort(([,a]: any, [,b]: any) => b - a)
        .slice(0, 5)
        .map(([area]) => area),
      metrics,
    };
  }

  async updatePerformance(data: {
    studentId: string;
    courseId: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
  }): Promise<PerformanceMetric> {
    const accuracy = (data.correctAnswers / data.totalQuestions) * 100;
    
    let metric = await this.performanceRepository.findOne({
      where: {
        studentId: data.studentId,
        courseId: data.courseId,
      },
    });

    if (metric) {
      metric.score = (metric.score + data.score) / 2;
      metric.accuracy = (metric.accuracy + accuracy) / 2;
      metric.totalAttempts += 1;
      metric.correctAttempts += data.correctAnswers;
    } else {
      metric = this.performanceRepository.create({
        studentId: data.studentId,
        courseId: data.courseId,
        score: data.score,
        accuracy,
        totalAttempts: 1,
        correctAttempts: data.correctAnswers,
      });
    }

    return this.performanceRepository.save(metric);
  }

  async getCourseAnalytics(courseId: string): Promise<any> {
    const progress = await this.progressRepository.find({ where: { courseId } });
    const performance = await this.performanceRepository.find({ where: { courseId } });

    const enrolledStudents = new Set(progress.map(p => p.studentId)).size;
    const completionRate = progress.filter(p => p.isCompleted).length / progress.length * 100;
    const averageScore = performance.reduce((sum, p) => sum + parseFloat(p.score as any), 0) / performance.length;

    return {
      enrolledStudents,
      completionRate: isNaN(completionRate) ? 0 : completionRate,
      averageScore: isNaN(averageScore) ? 0 : averageScore,
      totalContentViews: progress.length,
      averageTimeSpent: progress.reduce((sum, p) => sum + p.timeSpent, 0) / progress.length,
    };
  }

  async getInstituteAnalytics(instituteId: string): Promise<any> {
    // This would typically query across multiple courses
    // For now, return mock data
    return {
      totalStudents: 150,
      totalTeachers: 15,
      activeCourses: 12,
      averageCompletionRate: 75,
      overallPerformance: 82,
      doubtResolutionRate: 95,
      engagementRate: 88,
    };
  }
}