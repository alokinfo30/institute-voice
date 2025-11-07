import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { Payment } from './entities/payment.entity';
import { PaymentServiceController } from './payment-service.controller';
import { PaymentServiceService } from './payment-service.service';
import { StripeService } from './services/stripe.service';
import { RazorpayService } from './services/razorpay.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'eduable_payments',
      entities: [Subscription, Payment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Subscription, Payment]),
  ],
  controllers: [PaymentServiceController],
  providers: [
    PaymentServiceService,
    StripeService,
    RazorpayService,
  ],
})
export class PaymentServiceModule {}