import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { DoubtReply } from './doubt-reply.entity';

@Entity('doubts')
export class Doubt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  studentId: string;

  @Column()
  courseId: string;

  @Column({ nullable: true })
  contentId: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in_progress', 'resolved', 'closed'],
    default: 'pending'
  })
  status: string;

  @Column({
    type: 'enum',
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  })
  priority: string;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @Column({ nullable: true })
  assignedTeacherId: string;

  @Column({ type: 'datetime', nullable: true })
  resolvedAt: Date;

  @Column({ default: 0 })
  viewCount: number;

  @OneToMany(() => DoubtReply, reply => reply.doubt)
  replies: DoubtReply[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}