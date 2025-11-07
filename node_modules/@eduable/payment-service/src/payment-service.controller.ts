import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentServiceService } from './payment-service.service';

@Controller()
export class PaymentServiceController {
  constructor(private readonly paymentService: PaymentServiceService) {}

  @MessagePattern({ cmd: 'create_subscription' })
  async createSubscription(@Payload() data: any) {
    return this.paymentService.createSubscription(data);
  }

  @MessagePattern({ cmd: 'get_subscription' })
  async getSubscription(@Payload() data: { instituteId: string }) {
    return this.paymentService.getSubscription(data.instituteId);
  }

  @MessagePattern({ cmd: 'update_subscription' })
  async updateSubscription(@Payload() data: { instituteId: string; plan: string }) {
    return this.paymentService.updateSubscription(data.instituteId, data.plan);
  }

  @MessagePattern({ cmd: 'cancel_subscription' })
  async cancelSubscription(@Payload() data: { instituteId: string }) {
    return this.paymentService.cancelSubscription(data.instituteId);
  }

  @MessagePattern({ cmd: 'create_payment_intent' })
  async createPaymentIntent(@Payload() data: any) {
    return this.paymentService.createPaymentIntent(data);
  }

  @MessagePattern({ cmd: 'confirm_payment' })
  async confirmPayment(@Payload() data: { paymentIntentId: string; paymentMethod: string }) {
    return this.paymentService.confirmPayment(data.paymentIntentId, data.paymentMethod);
  }

  @MessagePattern({ cmd: 'get_payment_history' })
  async getPaymentHistory(@Payload() data: { instituteId: string; page?: number; limit?: number }) {
    return this.paymentService.getPaymentHistory(data.instituteId, data.page, data.limit);
  }

  @MessagePattern({ cmd: 'handle_webhook' })
  async handleWebhook(@Payload() data: { gateway: string; payload: any; signature: string }) {
    return this.paymentService.handleWebhook(data.gateway, data.payload, data.signature);
  }
}