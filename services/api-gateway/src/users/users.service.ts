import { Injectable, NotFoundException } from '@nestjs/common';

// Mock data - replace with actual database
const users = [
  {
    id: '1',
    name: 'John Student',
    email: 'student@example.com',
    password: '$2a$12$hashedpassword', // bcrypt hash of 'password123'
    role: 'student',
    instituteId: 'institute-1',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Jane Teacher',
    email: 'teacher@example.com',
    password: '$2a$12$hashedpassword',
    role: 'teacher',
    instituteId: 'institute-1',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

@Injectable()
export class UsersService {
  private users = users;

  async findByEmail(email: string): Promise<any> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<any> {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(userData: any): Promise<any> {
    const user = {
      id: (this.users.length + 1).toString(),
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async update(id: string, updateData: any): Promise<any> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };

    return this.users[userIndex];
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(userIndex, 1);
  }
}