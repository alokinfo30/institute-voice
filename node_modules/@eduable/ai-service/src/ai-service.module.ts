import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs/redis';
import { AiServiceController } from './ai-service.controller';
import { AiServiceService } from './ai-service.service';
import { AdaptiveLearningService } from './services/adaptive-learning.service';
import { DoubtAnalysisService } from './services/doubt-analysis.service';
import { PerformancePredictionService } from './services/performance-prediction.service';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
      },
    }),
  ],
  controllers: [AiServiceController],
  providers: [
    AiServiceService,
    AdaptiveLearningService,
    DoubtAnalysisService,
    PerformancePredictionService,
  ],
})
export class AiServiceModule {}