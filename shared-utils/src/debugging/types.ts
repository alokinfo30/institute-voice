export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface DebugEvent {
  type: string;
  timestamp: number;
  context: any;
  sessionId: string;
}

export interface ProfileData {
  timestamp: number;
  heapUsed: number;
  heapTotal: number;
  external: number;
  cpuUser: number;
  cpuSystem: number;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: any;
  stackTrace?: string;
}

export interface DebugSnapshot {
  timestamp: number;
  memory: {
    heapUsed: number;
    heapTotal: number;
    external: number;
    arrayBuffers: number;
  };
  cpu: {
    user: number;
    system: number;
  };
  eventLoop: {
    latency: number;
    lag: number;
  };
  gc: {
    collections: number;
    duration: number;
    type: string;
  };
}

export interface PerformanceMetrics {
  timestamp: number;
  duration: number;
  memory: number;
  cpu: number;
}