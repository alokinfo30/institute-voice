import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Doubt } from './doubt.entity';

@Entity('doubt_replies')
export class DoubtReply {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @Column()
  authorId: string;

  @Column({
    type: 'enum',
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  })
  authorType: string;

  @Column({ default: false })
  isSolution: boolean;

  @Column({ type: 'json', nullable: true })
  attachments: any[];

  @ManyToOne(() => Doubt, doubt => doubt.replies)
  doubt: Doubt;

  @Column()
  doubtId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}