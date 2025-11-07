import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  instituteId: string;

  @Column({
    type: 'enum',
    enum: ['starter', 'professional', 'enterprise'],
    default: 'starter'
  })
  plan: string;

  @Column({
    type: 'enum',
    enum: ['active', 'canceled', 'expired', 'pending'],
    default: 'pending'
  })
  status: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  currency: string;

  @Column({ type: 'json', nullable: true })
  features: any;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column({ type: 'datetime', nullable: true })
  canceledAt: Date;

  @Column({ nullable: true })
  paymentGatewayId: string;

  @Column({ type: 'json', nullable: true })
  metadata: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}