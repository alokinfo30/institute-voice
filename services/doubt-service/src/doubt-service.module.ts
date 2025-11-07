import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doubt } from './entities/doubt.entity';
import { DoubtReply } from './entities/doubt-reply.entity';
import { DoubtServiceController } from './doubt-service.controller';
import { DoubtServiceService } from './doubt-service.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'eduable_doubts',
      entities: [Doubt, DoubtReply],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Doubt, DoubtReply]),
  ],
  controllers: [DoubtServiceController],
  providers: [DoubtServiceService],
})
export class DoubtServiceModule {}