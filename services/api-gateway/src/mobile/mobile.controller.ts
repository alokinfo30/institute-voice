import { Controller, Post, Body, Get, Headers, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { MobileService } from './mobile.service';

@ApiTags('mobile')
@Controller('mobile')
export class MobileController {
  constructor(private readonly mobileService: MobileService) {}

  @Post('push-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Register mobile push token' })
  async registerPushToken(
    @Headers('authorization') auth: string,
    @Body() tokenData: { token: string; platform: 'ios' | 'android' }
  ) {
    const userId = this.extractUserIdFromToken(auth);
    return this.mobileService.registerPushToken(userId, tokenData);
  }

  @Get('offline-content')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get content for offline use' })
  async getOfflineContent(@Headers('authorization') auth: string) {
    const userId = this.extractUserIdFromToken(auth);
    return this.mobileService.getOfflineContent(userId);
  }

  @Post('sync-progress')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Sync offline progress' })
  async syncOfflineProgress(
    @Headers('authorization') auth: string,
    @Body() progressData: any
  ) {
    const userId = this.extractUserIdFromToken(auth);
    return this.mobileService.syncOfflineProgress(userId, progressData);
  }

  @Get('app-config')
  @ApiOperation({ summary: 'Get mobile app configuration' })
  async getAppConfig() {
    return this.mobileService.getAppConfig();
  }

  private extractUserIdFromToken(authHeader: string): string {
    // Extract user ID from JWT token
    const token = authHeader.replace('Bearer ', '');
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return payload.sub;
  }
}