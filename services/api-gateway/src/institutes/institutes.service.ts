import { Injectable, NotFoundException } from '@nestjs/common';

// Mock data - replace with actual database
const institutes = [
  {
    id: 'institute-1',
    name: 'IIT Coaching Center',
    domain: 'iitcoaching.example.com',
    plan: 'professional',
    settings: {
      theme: 'default',
      features: {
        analytics: true,
        doubtSupport: true,
        aiLearning: true,
      },
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

@Injectable()
export class InstitutesService {
  private institutes = institutes;

  async findById(id: string): Promise<any> {
    const institute = this.institutes.find(inst => inst.id === id);
    if (!institute) {
      throw new NotFoundException('Institute not found');
    }
    return institute;
  }

  async create(instituteData: any): Promise<any> {
    const institute = {
      id: `institute-${this.institutes.length + 1}`,
      ...instituteData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.institutes.push(institute);
    return institute;
  }

  async update(id: string, updateData: any): Promise<any> {
    const instituteIndex = this.institutes.findIndex(inst => inst.id === id);
    if (instituteIndex === -1) {
      throw new NotFoundException('Institute not found');
    }

    this.institutes[instituteIndex] = {
      ...this.institutes[instituteIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    return this.institutes[instituteIndex];
  }

  async getStats(instituteId: string): Promise<any> {
    return {
      totalStudents: 150,
      totalTeachers: 15,
      activeCourses: 12,
      doubtResolutionRate: 95,
      averagePerformance: 87,
    };
  }
}