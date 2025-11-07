import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TestDebugger } from '../../../../shared-utils/src/testing/TestDebugger';

@ApiTags('Debug')
@Controller('_debug')
export class DebugController {
  private readonly debugService: TestDebugger;

  constructor(debugService: TestDebugger) {
    this.debugService = debugService;
  }

  @Get('snapshots')
  @ApiOperation({ summary: 'Get debug snapshots' })
  @ApiResponse({ status: HttpStatus.OK })
  async getSnapshots() {
    return {
      snapshots: this.debugService.getSnapshots(),
      analysis: this.debugService.analyzeSnapshots()
    };
  }

  @Get('snapshots/cache')
  @ApiOperation({ summary: 'Get cache-related debug snapshots' })
  @ApiResponse({ status: HttpStatus.OK })
  async getCacheSnapshots() {
    return {
      snapshots: this.debugService.getSnapshots({ scope: 'cache' }),
      analysis: this.debugService.analyzeSnapshots()
    };
  }

  @Get('snapshots/stats')
  @ApiOperation({ summary: 'Get snapshot statistics' })
  @ApiResponse({ status: HttpStatus.OK })
  async getSnapshotStats() {
    const analysis = this.debugService.analyzeSnapshots();
    const snapshots = this.debugService.getSnapshots();

    const scopes = new Set(snapshots.map(s => s.scope));
    const scopeStats = Array.from(scopes).map(scope => {
      const filtered = this.debugService.getSnapshots({ scope });
      return {
        scope,
        count: filtered.length,
        averageDuration: filtered.reduce((acc, s) => acc + (s.data.duration || 0), 0) / filtered.length
      };
    });

    return {
      totalSnapshots: snapshots.length,
      scopeStats,
      memoryTrend: analysis.memoryTrend,
      performanceMetrics: analysis.performanceMetrics,
      anomalyCount: analysis.anomalies.length
    };
  }
}