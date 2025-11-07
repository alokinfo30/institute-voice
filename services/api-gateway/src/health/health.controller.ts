import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator, DiskHealthIndicator } from '@nestjs/terminus';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: 'Check API health status' })
  @ApiResponse({ status: 200, description: 'Health check passed' })
  @ApiResponse({ status: 503, description: 'Health check failed' })
  check() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024), // 150MB threshold
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024), // 300MB threshold
      () => this.disk.checkStorage('disk', { path: '/', thresholdPercent: 0.9 }), // 90% threshold
    ]);
  }

  @Get('microservices')
  @HealthCheck()
  @ApiOperation({ summary: 'Check microservices health' })
  async checkMicroservices() {
    const services = [
      { name: 'user-service', port: 3001 },
      { name: 'content-service', port: 3002 },
      { name: 'analytics-service', port: 3003 },
      { name: 'doubt-service', port: 3004 },
      { name: 'ai-service', port: 3005 },
      { name: 'notification-service', port: 3006 },
      { name: 'payment-service', port: 3007 },
    ];

    const checks = services.map(service => 
      () => this.http.pingCheck(service.name, `http://localhost:${service.port}/health`)
    );

    return this.health.check(checks);
  }
}