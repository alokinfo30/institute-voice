import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { EmailService } from './services/email.service';
import { PushNotificationService } from './services/push-notification.service';

@Injectable()
export class NotificationServiceService {
  constructor(
    @InjectRepository(Notification)
    private notificationsRepository: Repository<Notification>,
    private emailService: EmailService,
    private pushNotificationService: PushNotificationService,
  ) {}

  async sendNotification(notificationData: {
    userId: string;
    title: string;
    message: string;
    type?: string;
    category?: string;
    data?: any;
    channels?: string[];
  }): Promise<Notification> {
    const { userId, title, message, type = 'info', category = 'system', data, channels = ['in_app'] } = notificationData;

    // Save to database
    const notification = this.notificationsRepository.create({
      userId,
      title,
      message,
      type,
      category,
      data,
    });
    const savedNotification = await this.notificationsRepository.save(notification);

    // Send via configured channels
    if (channels.includes('email')) {
      await this.emailService.sendNotificationEmail(userId, title, message);
      savedNotification.emailed = true;
      await this.notificationsRepository.save(savedNotification);
    }

    if (channels.includes('push')) {
      await this.pushNotificationService.sendPushNotification(userId, title, message, data);
      savedNotification.pushed = true;
      await this.notificationsRepository.save(savedNotification);
    }

    return savedNotification;
  }

  async getUserNotifications(userId: string, page: number = 1, limit: number = 20): Promise<{ notifications: Notification[]; total: number }> {
    const skip = (page - 1) * limit;

    const [notifications, total] = await this.notificationsRepository.findAndCount({
      where: { userId },
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return { notifications, total };
  }

  async markNotificationRead(notificationId: string): Promise<Notification> {
    const notification = await this.notificationsRepository.findOne({
      where: { id: notificationId },
    });

    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.read = true;
    notification.readAt = new Date();
    return this.notificationsRepository.save(notification);
  }

  async markAllNotificationsRead(userId: string): Promise<void> {
    await this.notificationsRepository.update(
      { userId, read: false },
      { read: true, readAt: new Date() }
    );
  }

  async getUnreadCount(userId: string): Promise<number> {
    return this.notificationsRepository.count({
      where: { userId, read: false },
    });
  }

  async sendBulkNotifications(userIds: string[], notificationData: any): Promise<void> {
    const notifications = userIds.map(userId =>
      this.notificationsRepository.create({
        userId,
        title: notificationData.title,
        message: notificationData.message,
        type: notificationData.type || 'info',
        category: notificationData.category || 'system',
        data: notificationData.data,
      })
    );

    await this.notificationsRepository.save(notifications);

    // Send bulk emails if configured
    if (notificationData.channels?.includes('email')) {
      await this.emailService.sendBulkNotificationEmail(userIds, notificationData.title, notificationData.message);
    }

    // Send bulk push notifications if configured
    if (notificationData.channels?.includes('push')) {
      await this.pushNotificationService.sendBulkPushNotifications(userIds, notificationData.title, notificationData.message, notificationData.data);
    }
  }
}