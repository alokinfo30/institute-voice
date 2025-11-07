import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Content } from './entities/content.entity';
import { ContentServiceController } from './content-service.controller';
import { ContentServiceService } from './content-service.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'eduable_content',
      entities: [Course, Content],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Course, Content]),
  ],
  controllers: [ContentServiceController],
  providers: [ContentServiceService],
})
export class ContentServiceModule {}