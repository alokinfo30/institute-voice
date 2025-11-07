import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('student_progress')
@Index(['studentId', 'contentId'])
export class StudentProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  studentId: string;

  @Column()
  contentId: string;

  @Column()
  courseId: string;

  @Column({ default: 0 })
  progress: number; // 0-100

  @Column({ default: 0 })
  timeSpent: number; // in seconds

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'datetime', nullable: true })
  completedAt: Date;

  @Column({ type: 'json', nullable: true })
  metadata: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}