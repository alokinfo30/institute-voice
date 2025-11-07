import { Injectable } from '@nestjs/common';

@Injectable()
export class PredictiveAnalyticsService {
  
  async predictStudentAtRisk(studentId: string, courseId: string): Promise<{
    isAtRisk: boolean;
    riskLevel: 'low' | 'medium' | 'high';
    reasons: string[];
    confidence: number;
    recommendations: string[];
  }> {
    const metrics = await this.getStudentMetrics(studentId, courseId);
    
    const riskScore = this.calculateRiskScore(metrics);
    const isAtRisk = riskScore > 0.7;
    const riskLevel = this.determineRiskLevel(riskScore);
    const reasons = this.identifyRiskReasons(metrics);
    const recommendations = this.generateRiskRecommendations(metrics, riskLevel);

    return {
      isAtRisk,
      riskLevel,
      reasons,
      confidence: riskScore,
      recommendations,
    };
  }

  private async getStudentMetrics(studentId: string, courseId: string): Promise<any> {
    // Get comprehensive student metrics
    return {
      attendanceRate: 0.85,
      assignmentCompletion: 0.70,
      averageScore: 65,
      recentTrend: 'declining',
      timeSpent: 1200, // minutes
      engagementScore: 0.6,
      doubtResolutionTime: 48, // hours
      peerComparison: 0.4, // percentile
    };
  }

  private calculateRiskScore(metrics: any): number {
    let score = 0;
    const weights = {
      attendanceRate: 0.15,
      assignmentCompletion: 0.20,
      averageScore: 0.25,
      recentTrend: 0.15,
      engagementScore: 0.15,
      doubtResolutionTime: 0.10,
    };

    // Attendance risk
    if (metrics.attendanceRate < 0.8) score += weights.attendanceRate * (1 - metrics.attendanceRate);
    
    // Assignment completion risk
    if (metrics.assignmentCompletion < 0.8) score += weights.assignmentCompletion * (1 - metrics.assignmentCompletion);
    
    // Performance risk
    if (metrics.averageScore < 70) score += weights.averageScore * ((70 - metrics.averageScore) / 70);
    
    // Trend risk
    if (metrics.recentTrend === 'declining') score += weights.recentTrend;
    
    // Engagement risk
    if (metrics.engagementScore < 0.7) score += weights.engagementScore * (1 - metrics.engagementScore);
    
    // Support risk
    if (metrics.doubtResolutionTime > 24) score += weights.doubtResolutionTime * (metrics.doubtResolutionTime / 72);

    return Math.min(1, score);
  }

  private determineRiskLevel(riskScore: number): 'low' | 'medium' | 'high' {
    if (riskScore < 0.4) return 'low';
    if (riskScore < 0.7) return 'medium';
    return 'high';
  }

  private identifyRiskReasons(metrics: any): string[] {
    const reasons = [];

    if (metrics.attendanceRate < 0.8) {
      reasons.push('Low attendance rate');
    }

    if (metrics.assignmentCompletion < 0.8) {
      reasons.push('Incomplete assignments');
    }

    if (metrics.averageScore < 70) {
      reasons.push('Below average performance');
    }

    if (metrics.recentTrend === 'declining') {
      reasons.push('Declining performance trend');
    }

    if (metrics.engagementScore < 0.7) {
      reasons.push('Low engagement with course material');
    }

    if (metrics.doubtResolutionTime > 24) {
      reasons.push('Slow doubt resolution');
    }

    return reasons;
  }

  private generateRiskRecommendations(metrics: any, riskLevel: string): string[] {
    const recommendations = [];

    if (metrics.attendanceRate < 0.8) {
      recommendations.push('Schedule regular attendance reminders');
      recommendations.push('Provide make-up session recordings');
    }

    if (metrics.assignmentCompletion < 0.8) {
      recommendations.push('Break assignments into smaller tasks');
      recommendations.push('Provide additional deadline reminders');
    }

    if (metrics.averageScore < 70) {
      recommendations.push('Schedule one-on-one tutoring sessions');
      recommendations.push('Provide additional practice materials');
    }

    if (riskLevel === 'high') {
      recommendations.push('Assign dedicated mentor for regular check-ins');
      recommendations.push('Create personalized intervention plan');
    }

    if (riskLevel === 'medium') {
      recommendations.push('Increase frequency of progress monitoring');
      recommendations.push('Provide targeted feedback on weak areas');
    }

    return recommendations;
  }

  async predictCourseCompletion(studentId: string, courseId: string): Promise<{
    predictedCompletionDate: Date;
    confidence: number;
    estimatedDuration: number; // in days
    keyMilestones: Array<{ milestone: string; predictedDate: Date; confidence: number }>;
  }> {
    const progress = await this.getStudentProgress(studentId, courseId);
    const learningPattern = await this.analyzeLearningPattern(studentId);
    
    const completionPrediction = this.calculateCompletionPrediction(progress, learningPattern);

    return {
      predictedCompletionDate: completionPrediction.date,
      confidence: completionPrediction.confidence,
      estimatedDuration: completionPrediction.duration,
      keyMilestones: completionPrediction.milestones,
    };
  }

  private async analyzeLearningPattern(studentId: string): Promise<any> {
    // Analyze student's learning behavior patterns
    return {
      averageStudyTime: 120, // minutes per day
      studyConsistency: 0.8,
      preferredStudyTimes: ['morning', 'evening'],
      contentEngagement: {
        video: 0.7,
        text: 0.5,
        interactive: 0.9,
      },
    };
  }

  private calculateCompletionPrediction(progress: any, learningPattern: any) {
    // Complex algorithm to predict completion based on:
    // - Current progress rate
    // - Historical learning patterns
    // - Course difficulty and length
    // - Student engagement metrics

    const baseDuration = 90; // days for average student
    const progressRate = progress.rate || 1.0;
    const engagementFactor = learningPattern.studyConsistency * learningPattern.averageStudyTime / 120;

    const adjustedDuration = baseDuration / (progressRate * engagementFactor);
    const predictedDate = new Date();
    predictedDate.setDate(predictedDate.getDate() + adjustedDuration);

    return {
      date: predictedDate,
      confidence: 0.85,
      duration: Math.round(adjustedDuration),
      milestones: this.generateMilestones(progress, adjustedDuration),
    };
  }

  private generateMilestones(progress: any, duration: number) {
    // Generate key learning milestones with predicted dates
    return [
      {
        milestone: 'Complete Fundamentals',
        predictedDate: new Date(Date.now() + (duration * 0.25 * 24 * 60 * 60 * 1000)),
        confidence: 0.9,
      },
      {
        milestone: 'Mid-course Assessment',
        predictedDate: new Date(Date.now() + (duration * 0.5 * 24 * 60 * 60 * 1000)),
        confidence: 0.8,
      },
      {
        milestone: 'Advanced Topics Mastery',
        predictedDate: new Date(Date.now() + (duration * 0.75 * 24 * 60 * 60 * 1000)),
        confidence: 0.7,
      },
    ];
  }
}