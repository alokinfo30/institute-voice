cript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from '../entities/subscription.entity';
import { Payment } from '../entities/payment.entity';

@Injectable()
export class SubscriptionAnalyticsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
    
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async getRevenueAnalytics(instituteId: string, period: 'monthly' | 'quarterly' | 'yearly' = 'monthly') {
    const payments = await this.paymentsRepository.find({
      where: { instituteId, status: 'completed' },
      order: { paidAt: 'DESC' },
    });

    return this.analyzeRevenueTrends(payments, period);
  }

  private analyzeRevenueTrends(payments: Payment[], period: string) {
    const revenueByPeriod = new Map();
    
    payments.forEach(payment => {
      const periodKey = this.getPeriodKey(payment.paidAt, period);
      const currentRevenue = revenueByPeriod.get(periodKey) || 0;
      revenueByPeriod.set(periodKey, currentRevenue + parseFloat(payment.amount as any));
    });

    return {
      totalRevenue: payments.reduce((sum, payment) => sum + parseFloat(payment.amount as any), 0),
      revenueByPeriod: Object.fromEntries(revenueByPeriod),
      growthRate: this.calculateGrowthRate(revenueByPeriod),
      averageRevenue: this.calculateAverageRevenue(revenueByPeriod),
      predictions: this.predictFutureRevenue(revenueByPeriod, period),
    };
  }

  private getPeriodKey(date: Date, period: string): string {
    const d = new Date(date);
    switch (period) {
      case 'monthly':
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}`;
      case 'quarterly':
        const quarter = Math.floor(d.getMonth() / 3) + 1;
        return `${d.getFullYear()}-Q${quarter}`;
      case 'yearly':
        return d.getFullYear().toString();
      default:
        return d.toISOString().split('T')[0];
    }
  }

  private calculateGrowthRate(revenueByPeriod: Map<string, number>): number {
    const periods = Array.from(revenueByPeriod.keys()).sort();
    if (periods.length < 2) return 0;

    const current = revenueByPeriod.get(periods[periods.length - 1]) || 0;
    const previous = revenueByPeriod.get(periods[periods.length - 2]) || 0;

    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  }

  private calculateAverageRevenue(revenueByPeriod: Map<string, number>): number {
    const revenues = Array.from(revenueByPeriod.values());
    return revenues.reduce((sum, revenue) => sum + revenue, 0) / revenues.length;
  }

  private predictFutureRevenue(revenueByPeriod: Map<string, number>, period: string) {
    const revenues = Array.from(revenueByPeriod.values());
    if (revenues.length < 3) return null;

    // Simple linear regression for prediction
    const n = revenues.length;
    const x = Array.from({ length: n }, (_, i) => i);
    const y = revenues;

    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((a, b, i) => a + b * y[i], 0);
    const sumXX = x.reduce((a, b) => a + b * b, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const nextPeriod = n;
    const prediction = slope * nextPeriod + intercept;

    return {
      nextPeriod: prediction,
      confidence: 0.75,
      trend: slope > 0 ? 'increasing' : 'decreasing',
    };
  }

  async getChurnAnalysis(instituteId: string) {
    const subscriptions = await this.subscriptionsRepository.find({
      where: { instituteId },
      order: { createdAt: 'DESC' },
    });

    const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
    const canceledSubscriptions = subscriptions.filter(sub => sub.status === 'canceled');

    const churnRate = canceledSubscriptions.length / subscriptions.length;
    const averageLifetime = this.calculateAverageLifetime(activeSubscriptions);
    const predictedChurn = this.predictChurn(activeSubscriptions);

    return {
      totalSubscriptions: subscriptions.length,
      activeSubscriptions: activeSubscriptions.length,
      canceledSubscriptions: canceledSubscriptions.length,
      churnRate: churnRate * 100, // percentage
      averageLifetime: averageLifetime, // days
      predictedChurn: predictedChurn,
      atRiskSubscriptions: this.identifyAtRiskSubscriptions(activeSubscriptions),
    };
  }

  private calculateAverageLifetime(subscriptions: Subscription[]): number {
    if (subscriptions.length === 0) return 0;

    const totalLifetime = subscriptions.reduce((sum, sub) => {
      const start = new Date(sub.startDate);
      const end = sub.endDate ? new Date(sub.endDate) : new Date();
      const lifetime = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24); // days
      return sum + lifetime;
    }, 0);

    return totalLifetime / subscriptions.length;
  }

  private predictChurn(activeSubscriptions: Subscription[]): number {
    // Simple prediction based on subscription age and engagement
    const now = new Date();
    const churnRisk = activeSubscriptions.map(sub => {
      const start = new Date(sub.startDate);
      const ageInDays = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
      
      // Higher risk for older subscriptions (simplified model)
      let risk = Math.min(ageInDays / 365, 1); // Max 100% risk after 1 year
      
      // Adjust based on plan type
      if (sub.plan === 'enterprise') risk *= 0.5; // Lower churn for enterprise
      if (sub.plan === 'starter') risk *= 1.2; // Higher churn for starter

      return risk;
    });

    return churnRisk.reduce((sum, risk) => sum + risk, 0) / churnRisk.length;
  }

  private identifyAtRiskSubscriptions(activeSubscriptions: Subscription[]): any[] {
    const now = new Date();
    return activeSubscriptions
      .map(sub => {
        const start = new Date(sub.startDate);
        const ageInDays = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        const riskScore = ageInDays > 300 ? 0.8 : ageInDays > 180 ? 0.5 : 0.2;

        return {
          subscriptionId: sub.id,
          plan: sub.plan,
          startDate: sub.startDate,
          riskScore,
          reasons: ageInDays > 300 ? ['Long subscription duration'] : ['Normal subscription cycle'],
        };
      })
      .filter(sub => sub.riskScore > 0.7)
      .sort((a, b) => b.riskScore - a.riskScore);
  }
}