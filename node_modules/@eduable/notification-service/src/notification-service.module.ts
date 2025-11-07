import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';
import { EmailService } from './services/email.service';
import { PushNotificationService } from './services/push-notification.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'eduable_notifications',
      entities: [Notification],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Notification]),
  ],
  controllers: [NotificationServiceController],
  providers: [
    NotificationServiceService,
    EmailService,
    PushNotificationService,
  ],
})
export class NotificationServiceModule {}