import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from '../entities/audit-log.entity';

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private auditLogRepository: Repository<AuditLog>,
  ) {}

  async log(
    action: string,
    userId: string,
    userRole: string,
    resource: string,
    resourceId: string,
    details: any = {},
    ipAddress: string = '',
    userAgent: string = '',
  ): Promise<void> {
    const auditLog = this.auditLogRepository.create({
      action,
      userId,
      userRole,
      resource,
      resourceId,
      details,
      ipAddress,
      userAgent,
      timestamp: new Date(),
    });

    await this.auditLogRepository.save(auditLog);
  }

  async getLogs(
    userId?: string,
    resource?: string,
    action?: string,
    startDate?: Date,
    endDate?: Date,
    page: number = 1,
    limit: number = 50,
  ): Promise<{ logs: AuditLog[]; total: number }> {
    const skip = (page - 1) * limit;
    
    const where: any = {};
    if (userId) where.userId = userId;
    if (resource) where.resource = resource;
    if (action) where.action = action;
    if (startDate || endDate) {
      where.timestamp = {};
      if (startDate) where.timestamp.$gte = startDate;
      if (endDate) where.timestamp.$lte = endDate;
    }

    const [logs, total] = await this.auditLogRepository.findAndCount({
      where,
      order: { timestamp: 'DESC' },
      skip,
      take: limit,
    });

    return { logs, total };
  }

  async analyzeSuspiciousActivity(): Promise<any[]> {
    // Analyze audit logs for suspicious patterns
    const suspiciousPatterns = [
      'Multiple failed login attempts',
      'Unusual access patterns',
      'Data export activities',
      'Role change activities',
    ];

    const results = [];
    
    for (const pattern of suspiciousPatterns) {
      const suspiciousLogs = await this.detectSuspiciousPattern(pattern);
      if (suspiciousLogs.length > 0) {
        results.push({
          pattern,
          count: suspiciousLogs.length,
          logs: suspiciousLogs.slice(0, 10), // Limit results
        });
      }
    }

    return results;
  }

  private async detectSuspiciousPattern(pattern: string): Promise<AuditLog[]> {
    switch (pattern) {
      case 'Multiple failed login attempts':
        return this.auditLogRepository
          .createQueryBuilder('log')
          .where('log.action = :action', { action: 'LOGIN_FAILED' })
          .andWhere('log.timestamp > :time', { time: new Date(Date.now() - 1 * 60 * 60 * 1000) }) // Last 1 hour
          .groupBy('log.userId, log.ipAddress')
          .having('COUNT(*) > 5')
          .getMany();

      case 'Unusual access patterns':
        // Detect access from unusual locations or times
        return this.auditLogRepository
          .createQueryBuilder('log')
          .where('log.timestamp > :time', { time: new Date(Date.now() - 24 * 60 * 60 * 1000) }) // Last 24 hours
          .andWhere('log.action LIKE :action', { action: '%ACCESS%' })
          .orderBy('log.timestamp', 'DESC')
          .getMany();

      default:
        return [];
    }
  }
}