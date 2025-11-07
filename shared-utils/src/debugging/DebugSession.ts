import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import { DebugConfig } from './DebugManager';
import { LogLevel, LogEntry, ProfileData, DebugSnapshot, PerformanceMetrics } from './types';

export class DebugSession extends EventEmitter {
  private logs: LogEntry[] = [];
  private profileData: ProfileData[] = [];
  private memoryProfilingInterval?: NodeJS.Timeout;
  private cpuProfilingInterval?: NodeJS.Timeout;
  private startTime: number = Date.now();
  private lastGcStats: any = null;
  private fileStream?: fs.WriteStream;

  constructor(
    private sessionId: string,
    private config: DebugConfig
  ) {
    super();
    this.initialize();
  }

  private initialize() {
    if (this.config.saveLogsToFile) {
      this.setupFileLogging();
    }

    if (this.config.enableMemoryProfiling) {
      this.startMemoryProfiling();
    }

    if (this.config.enableCpuProfiling) {
      this.startCpuProfiling();
    }
  }

  private setupFileLogging() {
    const logDir = this.config.logDirectory || './logs';
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const logFile = path.join(logDir, `${this.sessionId}-${Date.now()}.log`);
    this.fileStream = fs.createWriteStream(logFile, { flags: 'a' });
  }

  public getId(): string {
    return this.sessionId;
  }

  public log(level: LogLevel, message: string, context?: any) {
    const logEntry: LogEntry = {
      level,
      message,
      timestamp: Date.now(),
      context,
      stackTrace: this.config.captureStackTraces ? new Error().stack : undefined
    };

    if (this.shouldLog(level, message)) {
      this.logs.push(logEntry);
      this.emit('log', logEntry);

      if (this.fileStream) {
        this.fileStream.write(JSON.stringify(logEntry) + '\n');
      }

      if (this.logs.length > (this.config.maxLogSize || 1000)) {
        this.logs = this.logs.slice(-Math.floor((this.config.maxLogSize || 1000) / 2));
      }
    }
  }

  public debug(message: string, context?: any) {
    this.log('debug', message, context);
  }

  public info(message: string, context?: any) {
    this.log('info', message, context);
  }

  public warn(message: string, context?: any) {
    this.log('warn', message, context);
  }

  public logError(message: string, error: Error | any, context?: any) {
    const errorContext = {
      ...context,
      error: {
        message: error.message,
        stack: error.stack,
        ...(error instanceof Error ? { name: error.name } : error)
      }
    };
    this.log('error', message, errorContext);
  }

  private shouldLog(level: LogLevel, message: string): boolean {
    const logLevels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    const configLevel = this.config.logLevel || 'info';

    if (logLevels.indexOf(level) < logLevels.indexOf(configLevel)) {
      return false;
    }

    if (this.config.filters) {
      const { includePatterns, excludePatterns } = this.config.filters;

      if (excludePatterns?.some(pattern => message.includes(pattern))) {
        return false;
      }

      if (includePatterns?.length && !includePatterns.some(pattern => message.includes(pattern))) {
        return false;
      }
    }

    return true;
  }

  public startMemoryProfiling() {
    if (this.memoryProfilingInterval) {
      return;
    }

    this.memoryProfilingInterval = setInterval(() => {
      const memUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();

      const profile: ProfileData = {
        timestamp: Date.now(),
        heapUsed: memUsage.heapUsed,
        heapTotal: memUsage.heapTotal,
        external: memUsage.external,
        cpuUser: cpuUsage.user,
        cpuSystem: cpuUsage.system
      };

      this.profileData.push(profile);
      this.emit('profile', profile);

      // Rotate profile data if it gets too large
      if (this.profileData.length > 1000) {
        this.profileData = this.profileData.slice(-500);
      }
    }, 1000);
  }

  public stopMemoryProfiling() {
    if (this.memoryProfilingInterval) {
      clearInterval(this.memoryProfilingInterval);
      this.memoryProfilingInterval = undefined;
    }
  }

  public startCpuProfiling() {
    // Implementation depends on the profiling tool being used
    // Could use v8-profiler-node8 or native Node.js profiling
  }

  public stopCpuProfiling() {
    if (this.cpuProfilingInterval) {
      clearInterval(this.cpuProfilingInterval);
      this.cpuProfilingInterval = undefined;
    }
  }

  public takeSnapshot(): DebugSnapshot {
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    // Get event loop lag
    const lag = this.getEventLoopLag();

    return {
      timestamp: Date.now(),
      memory: {
        heapUsed: memUsage.heapUsed,
        heapTotal: memUsage.heapTotal,
        external: memUsage.external,
        arrayBuffers: memUsage.arrayBuffers || 0
      },
      cpu: {
        user: cpuUsage.user,
        system: cpuUsage.system
      },
      eventLoop: {
        latency: lag,
        lag: lag
      },
      gc: this.lastGcStats || {
        collections: 0,
        duration: 0,
        type: 'unknown'
      }
    };
  }

  private getEventLoopLag(): number {
    // For simplicity, return a default value
    // In a real implementation, we would measure this properly
    return 0;
  }

  public measurePerformance<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const startTime = process.hrtime.bigint();
    const startMemory = process.memoryUsage().heapUsed;
    const startCpu = process.cpuUsage();

    return fn().finally(() => {
      const endTime = process.hrtime.bigint();
      const endMemory = process.memoryUsage().heapUsed;
      const endCpu = process.cpuUsage(startCpu);

      const metrics: PerformanceMetrics = {
        timestamp: Date.now(),
        duration: Number(endTime - startTime) / 1_000_000, // Convert to milliseconds
        memory: endMemory - startMemory,
        cpu: endCpu.user + endCpu.system
      };

      this.emit('performance', { name, metrics });
    });
  }

  public setLogLevel(level: LogLevel) {
    this.config.logLevel = level;
  }

  public enableMemoryProfiling(enable: boolean) {
    if (enable) {
      this.startMemoryProfiling();
    } else {
      this.stopMemoryProfiling();
    }
  }

  public enableCpuProfiling(enable: boolean) {
    if (enable) {
      this.startCpuProfiling();
    } else {
      this.stopCpuProfiling();
    }
  }

  public updateFilters(filters: DebugConfig['filters']) {
    this.config.filters = filters;
  }

  public getLogs(
    options?: {
      level?: LogLevel;
      startTime?: number;
      endTime?: number;
      limit?: number;
    }
  ): LogEntry[] {
    let filteredLogs = [...this.logs];

    if (options?.level) {
      filteredLogs = filteredLogs.filter(log => log.level === options.level);
    }

    if (options?.startTime) {
      filteredLogs = filteredLogs.filter(log => log.timestamp >= options.startTime!);
    }

    if (options?.endTime) {
      filteredLogs = filteredLogs.filter(log => log.timestamp <= options.endTime!);
    }

    if (options?.limit) {
      filteredLogs = filteredLogs.slice(-options.limit);
    }

    return filteredLogs;
  }

  public getProfileData(): ProfileData[] {
    return [...this.profileData];
  }

  public cleanup() {
    this.stopMemoryProfiling();
    this.stopCpuProfiling();

    if (this.fileStream) {
      this.fileStream.end();
    }

    this.removeAllListeners();
  }
}