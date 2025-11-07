import { EventEmitter } from 'events';

export interface DebugSnapshot {
  timestamp: number;
  scope: string;
  data: any;
  metadata: {
    memory?: NodeJS.MemoryUsage;
    callStack?: string[];
    eventLoop?: any;
  };
}

export interface DebugOptions {
  captureMemory?: boolean;
  captureCallStack?: boolean;
  captureEventLoop?: boolean;
  samplingRate?: number;
  maxSnapshots?: number;
}

export class TestDebugger extends EventEmitter {
  private snapshots: DebugSnapshot[] = [];
  private options: DebugOptions;
  private startTime: number;
  private samplingInterval: ReturnType<typeof setInterval> | null = null;

  constructor(options: DebugOptions = {}) {
    super();
    this.options = {
      captureMemory: true,
      captureCallStack: true,
      captureEventLoop: false,
      samplingRate: 1000,
      maxSnapshots: 1000,
      ...options
    };
    this.startTime = Date.now();
  }

  start(): void {
    if (this.samplingInterval) {
      return;
    }

    this.startTime = Date.now();
    this.samplingInterval = setInterval(() => {
      this.captureSnapshot('periodic');
    }, this.options.samplingRate);
  }

  stop(): void {
    if (this.samplingInterval) {
      clearInterval(this.samplingInterval as ReturnType<typeof setInterval>);
      this.samplingInterval = null;
    }
  }

  captureSnapshot(scope: string, data: any = {}): DebugSnapshot {
    const snapshot: DebugSnapshot = {
      timestamp: Date.now() - this.startTime,
      scope,
      data,
      metadata: {}
    };

    if (this.options.captureMemory) {
      snapshot.metadata.memory = process.memoryUsage();
    }

    if (this.options.captureCallStack) {
      snapshot.metadata.callStack = new Error().stack?.split('\n').slice(2);
    }

    if (this.options.captureEventLoop) {
      // Capture event loop metrics if available
      try {
        const eventLoopStats = require('event-loop-stats').sense();
        snapshot.metadata.eventLoop = eventLoopStats;
      } catch (e) {
        snapshot.metadata.eventLoop = { error: 'Event loop stats not available' };
      }
    }

    this.snapshots.push(snapshot);
    this.emit('snapshot', snapshot);

    // Maintain maximum snapshots limit
    if (this.options.maxSnapshots && this.snapshots.length > this.options.maxSnapshots) {
      this.snapshots = this.snapshots.slice(-this.options.maxSnapshots);
    }

    return snapshot;
  }

  getSnapshots(filter?: { scope?: string; timeRange?: [number, number] }): DebugSnapshot[] {
    let filtered = [...this.snapshots];

    if (filter?.scope) {
      filtered = filtered.filter(s => s.scope === filter.scope);
    }

    if (filter?.timeRange) {
      const [start, end] = filter.timeRange;
      filtered = filtered.filter(s => s.timestamp >= start && s.timestamp <= end);
    }

    return filtered;
  }

  analyzeSnapshots(): {
    memoryTrend: { heapUsed: number[]; heapTotal: number[] };
    performanceMetrics: { averageInterval: number; maxInterval: number };
    anomalies: DebugSnapshot[];
  } {
    const memoryTrend: { heapUsed: number[]; heapTotal: number[] } = {
      heapUsed: [],
      heapTotal: []
    };

    const intervals: number[] = [];
    const anomalies: DebugSnapshot[] = [];

    for (let i = 0; i < this.snapshots.length; i++) {
      const snapshot = this.snapshots[i];

      // Collect memory trends
      if (snapshot.metadata.memory) {
        memoryTrend.heapUsed.push(snapshot.metadata.memory.heapUsed);
        memoryTrend.heapTotal.push(snapshot.metadata.memory.heapTotal);
      }

      // Calculate intervals
      if (i > 0) {
        const interval = snapshot.timestamp - this.snapshots[i - 1].timestamp;
        intervals.push(interval);

        // Detect anomalies (intervals significantly larger than sampling rate)
        if (interval > this.options.samplingRate! * 2) {
          anomalies.push(snapshot);
        }
      }
    }

    return {
      memoryTrend,
      performanceMetrics: {
        averageInterval: intervals.length ? intervals.reduce((a, b) => a + b, 0) / intervals.length : 0,
        maxInterval: intervals.length ? Math.max(...intervals) : 0
      },
      anomalies
    };
  }

  clear(): void {
    this.snapshots = [];
    this.startTime = Date.now();
  }

  export(): { snapshots: DebugSnapshot[]; analysis: any } {
    return {
      snapshots: this.snapshots,
      analysis: this.analyzeSnapshots()
    };
  }
}