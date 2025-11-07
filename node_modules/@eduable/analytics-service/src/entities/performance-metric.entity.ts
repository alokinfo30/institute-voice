import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('performance_metrics')
@Index(['studentId', 'courseId'])
export class PerformanceMetric {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  studentId: string;

  @Column()
  courseId: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  score: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  accuracy: number;

  @Column({ default: 0 })
  totalAttempts: number;

  @Column({ default: 0 })
  correctAttempts: number;

  @Column({ type: 'json', nullable: true })
  topicWisePerformance: any;

  @Column({ type: 'json', nullable: true })
  weakAreas: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}