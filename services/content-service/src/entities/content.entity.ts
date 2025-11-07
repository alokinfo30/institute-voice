import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: ['video', 'pdf', 'quiz', 'assignment', 'text'],
    default: 'video'
  })
  type: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  duration: number; // in minutes

  @Column({ type: 'json', nullable: true })
  metadata: any;

  @Column({ default: 0 })
  order: number;

  @Column({ default: true })
  isPublished: boolean;

  @ManyToOne(() => Course, course => course.contents)
  course: Course;

  @Column()
  courseId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}