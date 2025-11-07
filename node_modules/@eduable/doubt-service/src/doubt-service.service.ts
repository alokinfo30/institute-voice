import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Doubt } from './entities/doubt.entity';
import { DoubtReply } from './entities/doubt-reply.entity';

@Injectable()
export class DoubtServiceService {
  constructor(
    @InjectRepository(Doubt)
    private doubtsRepository: Repository<Doubt>,
    
    @InjectRepository(DoubtReply)
    private doubtRepliesRepository: Repository<DoubtReply>,
  ) {}

  async createDoubt(doubtData: Partial<Doubt>): Promise<Doubt> {
    const doubt = this.doubtsRepository.create(doubtData);
    return this.doubtsRepository.save(doubt);
  }

  async getDoubts(filters: {
    studentId?: string;
    courseId?: string;
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<{ doubts: Doubt[]; total: number }> {
    const { studentId, courseId, status, page = 1, limit = 20 } = filters;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (studentId) where.studentId = studentId;
    if (courseId) where.courseId = courseId;
    if (status) where.status = status;

    const [doubts, total] = await this.doubtsRepository.findAndCount({
      where,
      relations: ['replies'],
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return { doubts, total };
  }

  async getDoubt(id: string): Promise<Doubt> {
    const doubt = await this.doubtsRepository.findOne({
      where: { id },
      relations: ['replies'],
    });

    if (!doubt) {
      throw new NotFoundException('Doubt not found');
    }

    // Increment view count
    doubt.viewCount += 1;
    await this.doubtsRepository.save(doubt);

    return doubt;
  }

  async updateDoubt(id: string, updateData: Partial<Doubt>): Promise<Doubt> {
    const doubt = await this.getDoubt(id);
    Object.assign(doubt, updateData);
    
    if (updateData.status === 'resolved' && !doubt.resolvedAt) {
      doubt.resolvedAt = new Date();
    }

    return this.doubtsRepository.save(doubt);
  }

  async addDoubtReply(replyData: Partial<DoubtReply>): Promise<DoubtReply> {
    const reply = this.doubtRepliesRepository.create(replyData);
    const savedReply = await this.doubtRepliesRepository.save(reply);

    // Update doubt status if a teacher replies
    if (replyData.authorType === 'teacher') {
      const doubt = await this.getDoubt(replyData.doubtId);
      if (doubt.status === 'pending') {
        doubt.status = 'in_progress';
        doubt.assignedTeacherId = replyData.authorId;
        await this.doubtsRepository.save(doubt);
      }
    }

    return savedReply;
  }

  async markReplyAsSolution(doubtId: string, replyId: string): Promise<Doubt> {
    const doubt = await this.getDoubt(doubtId);
    const reply = await this.doubtRepliesRepository.findOne({
      where: { id: replyId, doubtId },
    });

    if (!reply) {
      throw new NotFoundException('Reply not found');
    }

    // Reset previous solutions
    await this.doubtRepliesRepository.update(
      { doubtId, isSolution: true },
      { isSolution: false }
    );

    // Mark new solution
    reply.isSolution = true;
    await this.doubtRepliesRepository.save(reply);

    // Update doubt status
    doubt.status = 'resolved';
    doubt.resolvedAt = new Date();
    return this.doubtsRepository.save(doubt);
  }

  async assignDoubtToTeacher(doubtId: string, teacherId: string): Promise<Doubt> {
    const doubt = await this.getDoubt(doubtId);
    doubt.assignedTeacherId = teacherId;
    doubt.status = 'in_progress';
    return this.doubtsRepository.save(doubt);
  }

  async getTeacherDoubts(teacherId: string, status?: string): Promise<Doubt[]> {
    const where: any = { assignedTeacherId: teacherId };
    if (status) where.status = status;

    return this.doubtsRepository.find({
      where,
      relations: ['replies'],
      order: { createdAt: 'DESC' },
    });
  }

  async getDoubtAnalytics(instituteId: string): Promise<any> {
    // This would typically aggregate data from multiple courses
    // For now, return analytics for all doubts
    const doubts = await this.doubtsRepository.find();
    const replies = await this.doubtRepliesRepository.find();

    const totalDoubts = doubts.length;
    const resolvedDoubts = doubts.filter(d => d.status === 'resolved').length;
    const pendingDoubts = doubts.filter(d => d.status === 'pending').length;
    const avgResolutionTime = this.calculateAverageResolutionTime(doubts);

    const teacherReplies = replies.filter(r => r.authorType === 'teacher').length;
    const studentReplies = replies.filter(r => r.authorType === 'student').length;

    return {
      totalDoubts,
      resolvedDoubts,
      pendingDoubts,
      resolutionRate: totalDoubts > 0 ? (resolvedDoubts / totalDoubts) * 100 : 0,
      averageResolutionTime: avgResolutionTime,
      teacherReplies,
      studentReplies,
      avgRepliesPerDoubt: totalDoubts > 0 ? replies.length / totalDoubts : 0,
    };
  }

  private calculateAverageResolutionTime(doubts: Doubt[]): number {
    const resolvedDoubts = doubts.filter(d => d.resolvedAt);
    if (resolvedDoubts.length === 0) return 0;

    const totalTime = resolvedDoubts.reduce((sum, doubt) => {
      const resolutionTime = doubt.resolvedAt.getTime() - doubt.createdAt.getTime();
      return sum + resolutionTime;
    }, 0);

    return totalTime / resolvedDoubts.length / (1000 * 60 * 60); // Return in hours
  }
}