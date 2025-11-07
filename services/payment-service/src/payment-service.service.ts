import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { Payment } from './entities/payment.entity';
import { StripeService } from './services/stripe.service';
import { RazorpayService } from './services/razorpay.service';

@Injectable()
export class PaymentServiceService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
    
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
    
    private stripeService: StripeService,
    private razorpayService: RazorpayService,
  ) {}

  async createSubscription(subscriptionData: {
    instituteId: string;
    plan: string;
    paymentMethod: string;
    billingDetails: any;
  }): Promise<Subscription> {
    const { instituteId, plan, paymentMethod, billingDetails } = subscriptionData;

    // Check for existing subscription
    const existingSubscription = await this.subscriptionsRepository.findOne({
      where: { instituteId, status: 'active' },
    });

    if (existingSubscription) {
      throw new BadRequestException('Institute already has an active subscription');
    }

    // Calculate amount based on plan
    const amount = this.calculatePlanAmount(plan);
    const currency = 'INR';

    // Create subscription in payment gateway
    let gatewaySubscription;
    try {
      if (paymentMethod === 'stripe') {
        gatewaySubscription = await this.stripeService.createSubscription(
          instituteId,
          plan,
          amount,
          currency,
          billingDetails
        );
      } else if (paymentMethod === 'razorpay') {
        gatewaySubscription = await this.razorpayService.createSubscription(
          instituteId,
          plan,
          amount,
          currency,
          billingDetails
        );
      } else {
        throw new BadRequestException('Unsupported payment method');
      }
    } catch (error) {
      throw new BadRequestException(`Payment gateway error: ${error.message}`);
    }

    // Create subscription record
    const subscription = this.subscriptionsRepository.create({
      instituteId,
      plan,
      amount,
      currency,
      status: 'active',
      features: this.getPlanFeatures(plan),
      startDate: new Date(),
      endDate: this.calculateEndDate(plan),
      paymentGatewayId: gatewaySubscription.id,
      metadata: gatewaySubscription,
    });

    return this.subscriptionsRepository.save(subscription);
  }

  async getSubscription(instituteId: string): Promise<Subscription> {
    const subscription = await this.subscriptionsRepository.findOne({
      where: { instituteId },
      order: { createdAt: 'DESC' },
    });

    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    return subscription;
  }

  async updateSubscription(instituteId: string, newPlan: string): Promise<Subscription> {
    const subscription = await this.getSubscription(instituteId);
    
    if (subscription.plan === newPlan) {
      throw new BadRequestException('Institute is already on this plan');
    }

    const newAmount = this.calculatePlanAmount(newPlan);
    
    // Update in payment gateway
    try {
      if (subscription.paymentGatewayId) {
        await this.stripeService.updateSubscription(
          subscription.paymentGatewayId,
          newPlan,
          newAmount
        );
      }
    } catch (error) {
      throw new BadRequestException(`Failed to update subscription: ${error.message}`);
    }

    // Update local record
    subscription.plan = newPlan;
    subscription.amount = newAmount;
    subscription.features = this.getPlanFeatures(newPlan);
    subscription.endDate = this.calculateEndDate(newPlan);

    return this.subscriptionsRepository.save(subscription);
  }

  async cancelSubscription(instituteId: string): Promise<Subscription> {
    const subscription = await this.getSubscription(instituteId);
    
    if (subscription.status !== 'active') {
      throw new BadRequestException('Subscription is not active');
    }

    // Cancel in payment gateway
    try {
      if (subscription.paymentGatewayId) {
        await this.stripeService.cancelSubscription(subscription.paymentGatewayId);
      }
    } catch (error) {
      throw new BadRequestException(`Failed to cancel subscription: ${error.message}`);
    }

    // Update local record
    subscription.status = 'canceled';
    subscription.canceledAt = new Date();

    return this.subscriptionsRepository.save(subscription);
  }

  async createPaymentIntent(paymentData: {
    instituteId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
  }): Promise<any> {
    const { instituteId, amount, currency, paymentMethod } = paymentData;

    let paymentIntent;
    try {
      if (paymentMethod === 'stripe') {
        paymentIntent = await this.stripeService.createPaymentIntent(amount, currency);
      } else if (paymentMethod === 'razorpay') {
        paymentIntent = await this.razorpayService.createOrder(amount, currency);
      } else {
        throw new BadRequestException('Unsupported payment method');
      }
    } catch (error) {
      throw new BadRequestException(`Payment gateway error: ${error.message}`);
    }

    // Create payment record
    const payment = this.paymentsRepository.create({
      instituteId,
      amount,
      currency,
      paymentMethod,
      gatewayTransactionId: paymentIntent.id,
      gatewayResponse: paymentIntent,
    });

    await this.paymentsRepository.save(payment);

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount,
      currency,
    };
  }

  async confirmPayment(paymentIntentId: string, paymentMethod: string): Promise<Payment> {
    const payment = await this.paymentsRepository.findOne({
      where: { gatewayTransactionId: paymentIntentId },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    let confirmedPayment;
    try {
      if (paymentMethod === 'stripe') {
        confirmedPayment = await this.stripeService.confirmPayment(paymentIntentId);
      } else if (paymentMethod === 'razorpay') {
        confirmedPayment = await this.razorpayService.confirmPayment(paymentIntentId);
      } else {
        throw new BadRequestException('Unsupported payment method');
      }
    } catch (error) {
      payment.status = 'failed';
      await this.paymentsRepository.save(payment);
      throw new BadRequestException(`Payment confirmation failed: ${error.message}`);
    }

    // Update payment record
    payment.status = 'completed';
    payment.paidAt = new Date();
    payment.gatewayResponse = confirmedPayment;

    return this.paymentsRepository.save(payment);
  }

  async getPaymentHistory(instituteId: string, page: number = 1, limit: number = 20): Promise<{ payments: Payment[]; total: number }> {
    const skip = (page - 1) * limit;

    const [payments, total] = await this.paymentsRepository.findAndCount({
      where: { instituteId },
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return { payments, total };
  }

  async handleWebhook(gateway: string, payload: any, signature: string): Promise<void> {
    try {
      if (gateway === 'stripe') {
        await this.stripeService.handleWebhook(payload, signature);
      } else if (gateway === 'razorpay') {
        await this.razorpayService.handleWebhook(payload, signature);
      } else {
        throw new BadRequestException('Unsupported payment gateway');
      }
    } catch (error) {
      console.error('Webhook handling failed:', error);
      throw error;
    }
  }

  private calculatePlanAmount(plan: string): number {
    const planPrices = {
      starter: 999,
      professional: 2999,
      enterprise: 7999,
    };
    return planPrices[plan] || 0;
  }

  private getPlanFeatures(plan: string): any {
    const features = {
      starter: {
        students: 100,
        teachers: 5,
        storage: '5GB',
        analytics: true,
        doubtSupport: true,
        aiLearning: false,
      },
      professional: {
        students: 500,
        teachers: 20,
        storage: '50GB',
        analytics: true,
        doubtSupport: true,
        aiLearning: true,
      },
      enterprise: {
        students: 'Unlimited',
        teachers: 'Unlimited',
        storage: '500GB',
        analytics: true,
        doubtSupport: true,
        aiLearning: true,
      },
    };
    return features[plan] || features.starter;
  }

  private calculateEndDate(plan: string): Date {
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription
    return endDate;
  }
}