import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index } from 'typeorm';

@Entity('notifications')
@Index(['userId', 'read'])
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column('text')
  message: string;

  @Column({
    type: 'enum',
    enum: ['info', 'success', 'warning', 'error', 'reminder'],
    default: 'info'
  })
  type: string;

  @Column({
    type: 'enum',
    enum: ['system', 'course', 'doubt', 'assignment', 'payment'],
    default: 'system'
  })
  category: string;

  @Column({ type: 'json', nullable: true })
  data: any;

  @Column({ default: false })
  read: boolean;

  @Column({ type: 'datetime', nullable: true })
  readAt: Date;

  @Column({ default: false })
  emailed: boolean;

  @Column({ default: false })
  pushed: boolean;

  @CreateDateColumn()
  createdAt: Date;
}