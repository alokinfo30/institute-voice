import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentProgress } from '../entities/student-progress.entity';
import { PerformanceMetric } from '../entities/performance-metric.entity';

@Injectable()
export class BusinessIntelligenceService {
  constructor(
    @InjectRepository(StudentProgress)
    private progressRepository: Repository<StudentProgress>,
    
    @InjectRepository(PerformanceMetric)
    private performanceRepository: Repository<PerformanceMetric>,
  ) {}

  async getInstituteKPIs(instituteId: string, period: 'daily' | 'weekly' | 'monthly' = 'monthly') {
    const [enrollmentStats, revenueStats, engagementStats, performanceStats] = await Promise.all([
      this.getEnrollmentKPIs(instituteId, period),
      this.getRevenueKPIs(instituteId, period),
      this.getEngagementKPIs(instituteId, period),
      this.getPerformanceKPIs(instituteId, period),
    ]);

    return {
      enrollment: enrollmentStats,
      revenue: revenueStats,
      engagement: engagementStats,
      performance: performanceStats,
      overallHealth: this.calculateOverallHealthScore([
        enrollmentStats,
        revenueStats,
        engagementStats,
        performanceStats,
      ]),
    };
  }

  async getEnrollmentKPIs(instituteId: string, period: string) {
    const trends = await this.calculateEnrollmentTrends(instituteId, period);
    const retention = await this.calculateRetentionRate(instituteId);
    const churn = await this.calculateChurnRate(instituteId);

    return {
      totalStudents: trends.currentTotal,
      newEnrollments: trends.newEnrollments,
      growthRate: trends.growthRate,
      retentionRate: retention,
      churnRate: churn,
      trends: trends.historical,
      predictions: this.predictEnrollment(trends.historical),
    };
  }

  async getRevenueKPIs(instituteId: string, period: string) {
    const revenueData = await this.calculateRevenueMetrics(instituteId, period);
    const subscriptionStats = await this.getSubscriptionAnalytics(instituteId);
    const costAnalysis = await this.analyzeCosts(instituteId);

    return {
      totalRevenue: revenueData.total,
      recurringRevenue: revenueData.recurring,
      growthRate: revenueData.growthRate,
      averageRevenuePerUser: revenueData.arpu,
      subscriptionStats,
      costAnalysis,
      profitability: revenueData.total - costAnalysis.total,
      margin: ((revenueData.total - costAnalysis.total) / revenueData.total) * 100,
    };
  }

  async getEngagementKPIs(instituteId: string, period: string) {
    const engagement = await this.calculateEngagementMetrics(instituteId, period);
    const activity = await this.analyzeUserActivity(instituteId);
    const contentPerformance = await this.analyzeContentPerformance(instituteId);

    return {
      dailyActiveUsers: engagement.dau,
      monthlyActiveUsers: engagement.mau,
      stickiness: engagement.dau / engagement.mau, // DAU/MAU ratio
      averageSessionDuration: engagement.avgSessionDuration,
      completionRate: engagement.completionRate,
      activityHeatmap: activity,
      topPerformingContent: contentPerformance.topContent,
      engagementTrends: engagement.trends,
    };
  }

  async getPerformanceKPIs(instituteId: string, period: string) {
    const performance = await this.calculatePerformanceMetrics(instituteId);
    const learningOutcomes = await this.analyzeLearningOutcomes(instituteId);
    const satisfaction = await this.calculateSatisfactionMetrics(instituteId);

    return {
      averageScore: performance.avgScore,
      passRate: performance.passRate,
      improvementRate: performance.improvementRate,
      learningOutcomes,
      satisfactionScores: satisfaction,
      benchmarkComparison: await this.compareWithBenchmarks(performance),
    };
  }

  async generateExecutiveReport(instituteId: string, startDate: Date, endDate: Date) {
    const kpis = await this.getInstituteKPIs(instituteId, 'monthly');
    const trends = await this.analyzeTrends(instituteId, startDate, endDate);
    const insights = await this.generateInsights(kpis, trends);
    const recommendations = this.generateStrategicRecommendations(insights);

    return {
      executiveSummary: this.createExecutiveSummary(kpis, trends),
      keyMetrics: kpis,
      trendAnalysis: trends,
      strategicInsights: insights,
      recommendations,
      riskAssessment: await this.assessBusinessRisks(kpis, trends),
      outlook: this.generateBusinessOutlook(kpis, trends),
    };
  }

  private async analyzeTrends(instituteId: string, startDate: Date, endDate: Date) {
    const periods = this.generateDatePeriods(startDate, endDate, 'monthly');
    
    const trendData = await Promise.all(
      periods.map(period => this.getInstituteKPIs(instituteId, 'monthly'))
    );

    return {
      enrollmentTrend: this.analyzeMetricTrend(trendData, 'enrollment.totalStudents'),
      revenueTrend: this.analyzeMetricTrend(trendData, 'revenue.totalRevenue'),
      engagementTrend: this.analyzeMetricTrend(trendData, 'engagement.stickiness'),
      performanceTrend: this.analyzeMetricTrend(trendData, 'performance.averageScore'),
      seasonalPatterns: this.identifySeasonalPatterns(trendData),
    };
  }

  private generateInsights(kpis: any, trends: any) {
    const insights = [];

    // Enrollment insights
    if (trends.enrollmentTrend.growthRate > 20) {
      insights.push({
        type: 'positive',
        category: 'enrollment',
        title: 'Rapid Growth',
        description: `Enrollment growing at ${trends.enrollmentTrend.growthRate}% monthly`,
        impact: 'high',
        confidence: 0.9,
      });
    }

    // Revenue insights
    if (kpis.revenue.margin < 10) {
      insights.push({
        type: 'warning',
        category: 'revenue',
        title: 'Low Profit Margin',
        description: `Current margin of ${kpis.revenue.margin.toFixed(1)}% below industry average`,
        impact: 'medium',
        confidence: 0.8,
      });
    }

    // Performance insights
    if (kpis.performance.improvementRate > 15) {
      insights.push({
        type: 'positive',
        category: 'performance',
        title: 'Strong Learning Outcomes',
        description: `Students showing ${kpis.performance.improvementRate}% improvement rate`,
        impact: 'high',
        confidence: 0.85,
      });
    }

    return insights;
  }

  private generateStrategicRecommendations(insights: any[]) {
    const recommendations = [];

    insights.forEach(insight => {
      switch (insight.category) {
        case 'enrollment':
          if (insight.type === 'positive') {
            recommendations.push({
              priority: 'high',
              action: 'Scale marketing efforts',
              rationale: 'Capitalize on growth momentum',
              estimatedImpact: '20-30% additional growth',
              timeline: '1-2 months',
            });
          }
          break;
        
        case 'revenue':
          if (insight.type === 'warning') {
            recommendations.push({
              priority: 'medium',
              action: 'Optimize operational costs',
              rationale: 'Improve profitability margins',
              estimatedImpact: '5-10% margin improvement',
              timeline: '3-6 months',
            });
          }
          break;
        
        case 'performance':
          if (insight.type === 'positive') {
            recommendations.push({
              priority: 'medium',
              action: 'Share success stories',
              rationale: 'Leverage strong outcomes for marketing',
              estimatedImpact: 'Improved conversion rates',
              timeline: '1 month',
            });
          }
          break;
      }
    });

    return recommendations;
  }

  async predictFuturePerformance(instituteId: string, horizon: number = 6) {
    const historicalData = await this.getHistoricalKPIs(instituteId, 24); // 24 months
    const predictions = {};

    // Use time series forecasting for each key metric
    const metrics = ['enrollment', 'revenue', 'engagement', 'performance'];
    
    for (const metric of metrics) {
      predictions[metric] = await this.forecastMetric(
        historicalData.map(d => d[metric]),
        horizon
      );
    }

    return {
      predictions,
      confidenceIntervals: this.calculateConfidenceIntervals(predictions),
      scenarios: this.generateBusinessScenarios(predictions),
      keyAssumptions: this.getForecastAssumptions(),
    };
  }

  private async forecastMetric(historicalData: any[], horizon: number) {
    // Implement time series forecasting (ARIMA, Prophet, etc.)
    // This is a simplified implementation
    const lastValue = historicalData[historicalData.length - 1];
    const trend = this.calculateTrend(historicalData);
    
    const forecast = [];
    for (let i = 1; i <= horizon; i++) {
      forecast.push(lastValue * (1 + trend * i));
    }

    return forecast;
  }

  // ... Additional BI methods for different analytics
}