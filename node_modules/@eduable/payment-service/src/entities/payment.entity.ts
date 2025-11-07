import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  instituteId: string;

  @Column()
  subscriptionId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  currency: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  })
  status: string;

  @Column()
  paymentMethod: string;

  @Column({ nullable: true })
  gatewayTransactionId: string;

  @Column({ type: 'json', nullable: true })
  gatewayResponse: any;

  @Column({ type: 'json', nullable: true })
  billingDetails: any;

  @Column({ type: 'datetime', nullable: true })
  paidAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}