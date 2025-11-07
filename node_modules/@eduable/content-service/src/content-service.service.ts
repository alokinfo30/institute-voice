import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentServiceService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
    
    @InjectRepository(Content)
    private contentsRepository: Repository<Content>,
  ) {}

  async getCourses(instituteId: string): Promise<Course[]> {
    return this.coursesRepository.find({
      where: { instituteId, isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async getCourse(id: string): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['contents'],
    });
    
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    
    return course;
  }

  async createCourse(courseData: Partial<Course>): Promise<Course> {
    const course = this.coursesRepository.create(courseData);
    return this.coursesRepository.save(course);
  }

  async updateCourse(id: string, updateData: Partial<Course>): Promise<Course> {
    const course = await this.getCourse(id);
    Object.assign(course, updateData);
    return this.coursesRepository.save(course);
  }

  async getCourseContents(courseId: string): Promise<Content[]> {
    return this.contentsRepository.find({
      where: { courseId, isPublished: true },
      order: { order: 'ASC' },
    });
  }

  async createContent(contentData: Partial<Content>): Promise<Content> {
    const content = this.contentsRepository.create(contentData);
    return this.contentsRepository.save(content);
  }

  async updateContent(id: string, updateData: Partial<Content>): Promise<Content> {
    const content = await this.contentsRepository.findOne({ where: { id } });
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    
    Object.assign(content, updateData);
    return this.contentsRepository.save(content);
  }

  async deleteContent(id: string): Promise<void> {
    const content = await this.contentsRepository.findOne({ where: { id } });
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    
    await this.contentsRepository.remove(content);
  }
}