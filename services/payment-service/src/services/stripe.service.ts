import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_...', {
      apiVersion: '2023-10-16',
    });
  }

  async createSubscription(
    instituteId: string,
    plan: string,
    amount: number,
    currency: string,
    billingDetails: any
  ): Promise<Stripe.Subscription> {
    // Create a product and price if they don't exist
    const product = await this.stripe.products.create({
      name: `EduAble ${plan} Plan`,
      metadata: { instituteId, plan },
    });

    const price = await this.stripe.prices.create({
      product: product.id,
      unit_amount: amount * 100, // Convert to cents
      currency,
      recurring: { interval: 'month' },
    });

    // Create subscription
    return this.stripe.subscriptions.create({
      customer: billingDetails.customerId, // You would create a customer first
      items: [{ price: price.id }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
      metadata: { instituteId, plan },
    });
  }

  async updateSubscription(
    subscriptionId: string,
    newPlan: string,
    newAmount: number
  ): Promise<Stripe.Subscription> {
    const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
    
    // Create new price for the updated plan
    const price = await this.stripe.prices.create({
      product: subscription.items.data[0].price.product as string,
      unit_amount: newAmount * 100,
      currency: 'inr',
      recurring: { interval: 'month' },
    });

    // Update subscription
    return this.stripe.subscriptions.update(subscriptionId, {
      items: [{
        id: subscription.items.data[0].id,
        price: price.id,
      }],
      proration_behavior: 'create_prorations',
      metadata: { ...subscription.metadata, plan: newPlan },
    });
  }

  async cancelSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
    return this.stripe.subscriptions.cancel(subscriptionId);
  }

  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }

  async confirmPayment(paymentIntentId: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.retrieve(paymentIntentId);
  }

  async handleWebhook(payload: any, signature: string): Promise<void> {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event: Stripe.Event;
    try {
      event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    } catch (err) {
      throw new Error(`Webhook signature verification failed: ${err.message}`);
    }

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        await this.handlePaymentSuccess(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        await this.handlePaymentFailure(event.data.object);
        break;
      case 'invoice.payment_succeeded':
        await this.handleInvoicePayment(event.data.object);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  }

  private async handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    console.log('Payment succeeded:', paymentIntent.id);
    // Update payment status in database
  }

  private async handlePaymentFailure(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    console.log('Payment failed:', paymentIntent.id);
    // Update payment status in database
  }

  private async handleInvoicePayment(invoice: Stripe.Invoice): Promise<void> {
    console.log('Invoice payment processed:', invoice.id);
    // Handle subscription renewal
  }
}