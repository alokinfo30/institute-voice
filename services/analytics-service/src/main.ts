import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AnalyticsServiceModule } from './analytics-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnalyticsServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3003,
      },
    },
  );
  
  await app.listen();
  console.log('🚀 Analytics Service running on port 3003');
}

bootstrap();