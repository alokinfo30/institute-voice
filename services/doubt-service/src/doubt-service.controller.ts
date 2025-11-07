import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DoubtServiceService } from './doubt-service.service';

@Controller()
export class DoubtServiceController {
  constructor(private readonly doubtService: DoubtServiceService) {}

  @MessagePattern({ cmd: 'create_doubt' })
  async createDoubt(@Payload() data: any) {
    return this.doubtService.createDoubt(data);
  }

  @MessagePattern({ cmd: 'get_doubts' })
  async getDoubts(@Payload() data: { 
    studentId?: string; 
    courseId?: string; 
    status?: string;
    page?: number;
    limit?: number;
  }) {
    return this.doubtService.getDoubts(data);
  }

  @MessagePattern({ cmd: 'get_doubt' })
  async getDoubt(@Payload() data: { id: string }) {
    return this.doubtService.getDoubt(data.id);
  }

  @MessagePattern({ cmd: 'update_doubt' })
  async updateDoubt(@Payload() data: { id: string; updateData: any }) {
    return this.doubtService.updateDoubt(data.id, data.updateData);
  }

  @MessagePattern({ cmd: 'add_doubt_reply' })
  async addDoubtReply(@Payload() data: any) {
    return this.doubtService.addDoubtReply(data);
  }

  @MessagePattern({ cmd: 'mark_reply_as_solution' })
  async markReplyAsSolution(@Payload() data: { doubtId: string; replyId: string }) {
    return this.doubtService.markReplyAsSolution(data.doubtId, data.replyId);
  }

  @MessagePattern({ cmd: 'assign_doubt_to_teacher' })
  async assignDoubtToTeacher(@Payload() data: { doubtId: string; teacherId: string }) {
    return this.doubtService.assignDoubtToTeacher(data.doubtId, data.teacherId);
  }

  @MessagePattern({ cmd: 'get_teacher_doubts' })
  async getTeacherDoubts(@Payload() data: { teacherId: string; status?: string }) {
    return this.doubtService.getTeacherDoubts(data.teacherId, data.status);
  }

  @MessagePattern({ cmd: 'get_doubt_analytics' })
  async getDoubtAnalytics(@Payload() data: { instituteId: string }) {
    return this.doubtService.getDoubtAnalytics(data.instituteId);
  }
}