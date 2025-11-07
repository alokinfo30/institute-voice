import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['student', 'teacher', 'admin', 'institute_admin'],
    default: 'student'
  })
  role: string;

  @Column()
  instituteId: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'json', nullable: true })
  preferences: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}