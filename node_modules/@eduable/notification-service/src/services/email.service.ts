import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Configure email transporter
    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendNotificationEmail(userId: string, title: string, message: string): Promise<void> {
    // In a real implementation, you would fetch user email from user service
    const userEmail = await this.getUserEmail(userId);
    
    if (!userEmail) {
      console.warn(`No email found for user ${userId}`);
      return;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@eduable.com',
      to: userEmail,
      subject: title,
      html: this.generateEmailTemplate(title, message),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Notification email sent to ${userEmail}`);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Email sending failed');
    }
  }

  async sendBulkNotificationEmail(userIds: string[], title: string, message: string): Promise<void> {
    // This would typically batch process emails
    for (const userId of userIds) {
      try {
        await this.sendNotificationEmail(userId, title, message);
      } catch (error) {
        console.error(`Failed to send email to user ${userId}:`, error);
      }
    }
  }

  private async getUserEmail(userId: string): Promise<string> {
    // Mock implementation - replace with actual user service call
    // This would typically make an RPC call to user service
    return `user${userId}@example.com`;
  }

  private generateEmailTemplate(title: string, message: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1976d2; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>EduAble</h1>
          </div>
          <div class="content">
            <h2>${title}</h2>
            <p>${message}</p>
            <p>Best regards,<br>The EduAble Team</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 EduAble. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}