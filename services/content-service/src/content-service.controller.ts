import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContentServiceService } from './content-service.service';

@Controller()
export class ContentServiceController {
  constructor(private readonly contentService: ContentServiceService) {}

  @MessagePattern({ cmd: 'get_courses' })
  async getCourses(@Payload() data: { instituteId: string }) {
    return this.contentService.getCourses(data.instituteId);
  }

  @MessagePattern({ cmd: 'get_course' })
  async getCourse(@Payload() data: { id: string }) {
    return this.contentService.getCourse(data.id);
  }

  @MessagePattern({ cmd: 'create_course' })
  async createCourse(@Payload() data: any) {
    return this.contentService.createCourse(data);
  }

  @MessagePattern({ cmd: 'update_course' })
  async updateCourse(@Payload() data: { id: string; updateData: any }) {
    return this.contentService.updateCourse(data.id, data.updateData);
  }

  @MessagePattern({ cmd: 'get_course_contents' })
  async getCourseContents(@Payload() data: { courseId: string }) {
    return this.contentService.getCourseContents(data.courseId);
  }

  @MessagePattern({ cmd: 'create_content' })
  async createContent(@Payload() data: any) {
    return this.contentService.createContent(data);
  }

  @MessagePattern({ cmd: 'update_content' })
  async updateContent(@Payload() data: { id: string; updateData: any }) {
    return this.contentService.updateContent(data.id, data.updateData);
  }

  @MessagePattern({ cmd: 'delete_content' })
  async deleteContent(@Payload() data: { id: string }) {
    return this.contentService.deleteContent(data.id);
  }
}