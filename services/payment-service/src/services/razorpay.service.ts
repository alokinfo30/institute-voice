import { Injectable } from '@nestjs/common';
import Razorpay from 'razorpay';

@Injectable()
export class RazorpayService {
  private razorpay: Razorpay;

  constructor() {
    this.razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_...',
      key_secret: process.env.RAZORPAY_KEY_SECRET || '...',
    });
  }

  async createSubscription(
    instituteId: string,
    plan: string,
    amount: number,
    currency: string,
    billingDetails: any
  ): Promise<any> {
    const subscription = await this.razorpay.subscriptions.create({
      plan_id: this.getPlanId(plan),
      total_count: 12, // 12 months
      customer_notify: 1,
      notes: {
        instituteId,
        plan,
      },
    });

    return subscription;
  }

  async createOrder(amount: number, currency: string): Promise<any> {
    const order = await this.razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        purpose: 'EduAble Subscription',
      },
    });

    return order;
  }

  async confirmPayment(paymentId: string): Promise<any> {
    return this.razorpay.payments.fetch(paymentId);
  }

  async handleWebhook(payload: any, signature: string): Promise<void> {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    // Verify webhook signature
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(JSON.stringify(payload))
      .digest('hex');

    if (expectedSignature !== signature) {
      throw new Error('Webhook signature verification failed');
    }

    // Handle different event types
    const event = payload.event;
    const payment = payload.payload.payment?.entity;

    switch (event) {
      case 'payment.captured':
        await this.handlePaymentSuccess(payment);
        break;
      case 'payment.failed':
        await this.handlePaymentFailure(payment);
        break;
      case 'subscription.charged':
        await this.handleSubscriptionCharge(payload.payload.subscription.entity);
        break;
      default:
        console.log(`Unhandled event type: ${event}`);
    }
  }

  private getPlanId(plan: string): string {
    const planIds = {
      starter: process.env.RAZORPAY_PLAN_STARTER,
      professional: process.env.RAZORPAY_PLAN_PROFESSIONAL,
      enterprise: process.env.RAZORPAY_PLAN_ENTERPRISE,
    };
    return planIds[plan] || planIds.starter;
  }

  private async handlePaymentSuccess(payment: any): Promise<void> {
    console.log('Payment captured:', payment.id);
    // Update payment status in database
  }

  private async handlePaymentFailure(payment: any): Promise<void> {
    console.log('Payment failed:', payment.id);
    // Update payment status in database
  }

  private async handleSubscriptionCharge(subscription: any): Promise<void> {
    console.log('Subscription charged:', subscription.id);
    // Handle subscription renewal
  }
}