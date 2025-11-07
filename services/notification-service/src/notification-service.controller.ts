import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationServiceService } from './notification-service.service';

@Controller()
export class NotificationServiceController {
  constructor(private readonly notificationService: NotificationServiceService) {}

  @MessagePattern({ cmd: 'send_notification' })
  async sendNotification(@Payload() data: any) {
    return this.notificationService.sendNotification(data);
  }

  @MessagePattern({ cmd: 'get_user_notifications' })
  async getUserNotifications(@Payload() data: { userId: string; page?: number; limit?: number }) {
    return this.notificationService.getUserNotifications(data.userId, data.page, data.limit);
  }

  @MessagePattern({ cmd: 'mark_notification_read' })
  async markNotificationRead(@Payload() data: { notificationId: string }) {
    return this.notificationService.markNotificationRead(data.notificationId);
  }

  @MessagePattern({ cmd: 'mark_all_notifications_read' })
  async markAllNotificationsRead(@Payload() data: { userId: string }) {
    return this.notificationService.markAllNotificationsRead(data.userId);
  }

  @MessagePattern({ cmd: 'get_unread_count' })
  async getUnreadCount(@Payload() data: { userId: string }) {
    return this.notificationService.getUnreadCount(data.userId);
  }

  @MessagePattern({ cmd: 'send_bulk_notifications' })
  async sendBulkNotifications(@Payload() data: { userIds: string[]; notification: any }) {
    return this.notificationService.sendBulkNotifications(data.userIds, data.notification);
  }
}