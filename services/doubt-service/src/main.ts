import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DoubtServiceModule } from './doubt-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DoubtServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3004,
      },
    },
  );
  
  await app.listen();
  console.log('🚀 Doubt Service running on port 3004');
}

bootstrap();