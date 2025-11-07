import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class MobilePushService {
  private firebaseAdmin: admin.app.App;

  constructor() {
    this.initializeFirebase();
  }

  private initializeFirebase() {
    if (!admin.apps.length) {
      this.firebaseAdmin = admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    }
  }

  async sendPushNotification(userId: string, notification: {
    title: string;
    body: string;
    data?: any;
    imageUrl?: string;
  }) {
    try {
      const userTokens = await this.getUserPushTokens(userId);
      
      if (userTokens.length === 0) {
        return;
      }

      const message = {
        notification: {
          title: notification.title,
          body: notification.body,
          imageUrl: notification.imageUrl,
        },
        data: notification.data,
        tokens: userTokens,
      };

      const response = await this.firebaseAdmin.messaging().sendEachForMulticast(message);
      
      // Clean up failed tokens
      await this.cleanupFailedTokens(userId, response);
      
      return response;
    } catch (error) {
      console.error('Push notification failed:', error);
      throw error;
    }
  }

  async sendBulkPushNotification(userIds: string[], notification: any) {
    const batches = this.chunkArray(userIds, 500); // FCM limit
    
    for (const batch of batches) {
      try {
        await Promise.all(
          batch.map(userId => this.sendPushNotification(userId, notification))
        );
      } catch (error) {
        console.error('Bulk push notification failed for batch:', error);
      }
    }
  }

  private async getUserPushTokens(userId: string): Promise<string[]> {
    // This would typically query your database for user's push tokens
    // Mock implementation:
    return ['token1', 'token2'];
  }

  private async cleanupFailedTokens(userId: string, response: admin.messaging.BatchResponse) {
    const failedTokens: string[] = [];
    
    response.responses.forEach((resp, idx) => {
      if (!resp.success) {
        failedTokens.push(response.responses[idx].messageId);
      }
    });

    if (failedTokens.length > 0) {
      await this.removePushTokens(userId, failedTokens);
    }
  }

  private async removePushTokens(userId: string, tokens: string[]) {
    // Remove invalid tokens from database
    console.log(`Removing ${tokens.length} invalid push tokens for user ${userId}`);
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  async subscribeToTopic(userId: string, topic: string) {
    const tokens = await this.getUserPushTokens(userId);
    
    if (tokens.length > 0) {
      await this.firebaseAdmin.messaging().subscribeToTopic(tokens, topic);
    }
  }

  async unsubscribeFromTopic(userId: string, topic: string) {
    const tokens = await this.getUserPushTokens(userId);
    
    if (tokens.length > 0) {
      await this.firebaseAdmin.messaging().unsubscribeFromTopic(tokens, topic);
    }
  }

  async sendToTopic(topic: string, notification: any) {
    const message = {
      notification: {
        title: notification.title,
        body: notification.body,
      },
      topic: topic,
    };

    await this.firebaseAdmin.messaging().send(message);
  }
}