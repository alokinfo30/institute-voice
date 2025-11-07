import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AiServiceModule } from './ai-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AiServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3005,
      },
    },
  );
  
  await app.listen();
  console.log('🚀 AI Service running on port 3005');
}

bootstrap();