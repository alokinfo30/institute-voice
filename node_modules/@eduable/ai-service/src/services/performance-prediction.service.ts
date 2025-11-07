import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformancePredictionService {
  async predictPerformance(studentId: string, courseId: string, historicalData: any): Promise<any> {
    // Mock performance prediction - replace with actual ML model
    const currentPerformance = this.analyzeCurrentPerformance(historicalData);
    const predictedScore = this.predictFinalScore(currentPerformance);
    const riskFactors = this.identifyRiskFactors(historicalData);
    const recommendations = this.generatePerformanceRecommendations(currentPerformance, riskFactors);
    
    return {
      studentId,
      courseId,
      currentPerformance,
      predictedScore,
      riskFactors,
      recommendations,
      confidence: this.calculatePredictionConfidence(historicalData),
      timeline: this.generatePerformanceTimeline(currentPerformance, predictedScore),
    };
  }

  private analyzeCurrentPerformance(historicalData: any): any {
    const { scores, attendance, assignmentCompletion } = historicalData;
    
    const averageScore = scores?.length ? 
      scores.reduce((sum: number, score: number) => sum + score, 0) / scores.length : 0;
    
    const attendanceRate = attendance || 0;
    const completionRate = assignmentCompletion || 0;

    return {
      averageScore,
      attendanceRate,
      completionRate,
      performanceLevel: this.calculatePerformanceLevel(averageScore, attendanceRate, completionRate),
      trend: this.analyzePerformanceTrend(scores),
    };
  }

  private calculatePerformanceLevel(score: number, attendance: number, completion: number): string {
    const weightedScore = (score * 0.6) + (attendance * 0.2) + (completion * 0.2);
    
    if (weightedScore >= 85) return 'excellent';
    if (weightedScore >= 70) return 'good';
    if (weightedScore >= 60) return 'average';
    return 'needs_improvement';
  }

  private analyzePerformanceTrend(scores: number[]): string {
    if (!scores || scores.length < 2) return 'stable';
    
    const recentScores = scores.slice(-3);
    const trend = recentScores[recentScores.length - 1] - recentScores[0];
    
    if (trend > 5) return 'improving';
    if (trend < -5) return 'declining';
    return 'stable';
  }

  private predictFinalScore(currentPerformance: any): number {
    const { averageScore, performanceLevel, trend } = currentPerformance;
    
    let prediction = averageScore;
    
    // Adjust based on performance level
    switch (performanceLevel) {
      case 'excellent':
        prediction += 5;
        break;
      case 'good':
        prediction += 2;
        break;
      case 'needs_improvement':
        prediction -= 5;
        break;
    }
    
    // Adjust based on trend
    switch (trend) {
      case 'improving':
        prediction += 3;
        break;
      case 'declining':
        prediction -= 3;
        break;
    }
    
    return Math.max(0, Math.min(100, prediction));
  }

  private identifyRiskFactors(historicalData: any): any[] {
    const riskFactors = [];
    const { scores, attendance, assignmentCompletion } = historicalData;

    if (scores?.length && scores[scores.length - 1] < 60) {
      riskFactors.push({
        factor: 'Low recent scores',
        severity: 'high',
        impact: 'Direct impact on final grade',
      });
    }

    if (attendance < 75) {
      riskFactors.push({
        factor: 'Low attendance',
        severity: 'medium',
        impact: 'Missed learning opportunities',
      });
    }

    if (assignmentCompletion < 80) {
      riskFactors.push({
        factor: 'Incomplete assignments',
        severity: 'medium',
        impact: 'Lack of practice and feedback',
      });
    }

    return riskFactors;
  }

  private generatePerformanceRecommendations(currentPerformance: any, riskFactors: any[]): any[] {
    const recommendations = [];
    const { performanceLevel, averageScore } = currentPerformance;

    if (performanceLevel === 'needs_improvement' || averageScore < 60) {
      recommendations.push({
        type: 'immediate',
        action: 'Schedule one-on-one tutoring session',
        priority: 'high',
        deadline: 'Within 1 week',
      });
    }

    if (riskFactors.some(factor => factor.severity === 'high')) {
      recommendations.push({
        type: 'preventive',
        action: 'Create personalized study plan',
        priority: 'high',
        deadline: 'Within 3 days',
      });
    }

    recommendations.push({
      type: 'maintenance',
      action: 'Regular practice and review',
      priority: 'medium',
      deadline: 'Ongoing',
    });

    return recommendations;
  }

  private calculatePredictionConfidence(historicalData: any): number {
    const { scores } = historicalData;
    if (!scores || scores.length < 5) return 0.6;
    
    const variance = this.calculateVariance(scores);
    const consistency = 1 - (variance / 100); // Normalize variance
    
    return Math.max(0.5, Math.min(0.95, consistency));
  }

  private calculateVariance(scores: number[]): number {
    const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length;
    return variance;
  }

  private generatePerformanceTimeline(currentPerformance: any, predictedScore: number): any[] {
    const { averageScore } = currentPerformance;
    const improvementNeeded = predictedScore - averageScore;
    const weeklyImprovement = improvementNeeded / 8; // 8 weeks remaining

    return Array.from({ length: 8 }, (_, i) => ({
      week: i + 1,
      targetScore: Math.round(averageScore + (weeklyImprovement * (i + 1))),
      focusAreas: this.getWeeklyFocusAreas(i),
      milestones: this.getWeeklyMilestones(i),
    }));
  }

  private getWeeklyFocusAreas(weekIndex: number): string[] {
    const focusAreas = [
      ['Fundamentals review', 'Basic concepts'],
      ['Practice problems', 'Application'],
      ['Advanced concepts', 'Problem solving'],
      ['Revision', 'Mock tests'],
      ['Weak areas', 'Targeted practice'],
      ['Speed training', 'Time management'],
      ['Full syllabus revision', 'Previous papers'],
      ['Final preparation', 'Confidence building'],
    ];

    return focusAreas[weekIndex] || ['General revision'];
  }

  private getWeeklyMilestones(weekIndex: number): string[] {
    const milestones = [
      ['Complete basic concept review'],
      ['Score 70%+ in practice test'],
      ['Master 2-3 advanced topics'],
      ['Complete full mock test'],
      ['Improve weak area scores by 15%'],
      ['Reduce solving time by 20%'],
      ['Achieve 80%+ in full syllabus test'],
      ['Ready for final assessment'],
    ];

    return milestones[weekIndex] || ['Weekly progress review'];
  }
}