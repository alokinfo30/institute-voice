import { DebugSession } from './DebugSession';
import { LogLevel } from './types';

export interface DebugConfig {
  serviceName: string;
  enableMemoryProfiling?: boolean;
  enableCpuProfiling?: boolean;
  logLevel?: LogLevel;
  maxLogSize?: number;
  rotateLogsAfterSize?: number;
  saveLogsToFile?: boolean;
  logDirectory?: string;
  enableRemoteDebugging?: boolean;
  remoteDebugPort?: number;
  breakOnError?: boolean;
  captureStackTraces?: boolean;
  filters?: {
    excludePatterns?: string[];
    includePatterns?: string[];
  };
}

export class DebugManager {
  private static instance: DebugManager;
  private sessions: Map<string, DebugSession> = new Map();
  private config: DebugConfig;

  private constructor(config: DebugConfig) {
    this.config = this.validateConfig(config);
    this.setupGlobalHandlers();
  }

  public static getInstance(config?: DebugConfig): DebugManager {
    if (!DebugManager.instance && config) {
      DebugManager.instance = new DebugManager(config);
    }
    return DebugManager.instance;
  }

  private validateConfig(config: DebugConfig): DebugConfig {
    const defaultConfig: Partial<DebugConfig> = {
      enableMemoryProfiling: false,
      enableCpuProfiling: false,
      logLevel: 'info',
      maxLogSize: 100 * 1024 * 1024, // 100MB
      rotateLogsAfterSize: 10 * 1024 * 1024, // 10MB
      saveLogsToFile: true,
      logDirectory: './logs',
      enableRemoteDebugging: false,
      remoteDebugPort: 9229,
      breakOnError: false,
      captureStackTraces: true,
      filters: {
        excludePatterns: [],
        includePatterns: []
      }
    };

    return { ...defaultConfig, ...config } as DebugConfig;
  }

  private setupGlobalHandlers() {
    process.on('uncaughtException', (error) => {
      this.handleUncaughtError('uncaughtException', error);
    });

    process.on('unhandledRejection', (reason) => {
      this.handleUncaughtError('unhandledRejection', reason);
    });

    if (this.config.enableRemoteDebugging) {
      this.setupRemoteDebugging();
    }
  }

  private handleUncaughtError(type: string, error: any) {
    const session = this.createSession('global');
    session.logError(`Uncaught ${type}:`, error);

    if (this.config.breakOnError) {
      debugger;
    }

    // Notify all active debug sessions
    this.sessions.forEach(s => {
      if (s.getId() !== 'global') {
        s.logError(`Uncaught ${type} in another session:`, error);
      }
    });
  }

  private setupRemoteDebugging() {
    const inspector = require('inspector');
    inspector.open(this.config.remoteDebugPort, '0.0.0.0', true);
  }

  public createSession(sessionId: string): DebugSession {
    if (this.sessions.has(sessionId)) {
      return this.sessions.get(sessionId)!;
    }

    const session = new DebugSession(sessionId, this.config);
    this.sessions.set(sessionId, session);
    return session;
  }

  public destroySession(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.cleanup();
      this.sessions.delete(sessionId);
    }
  }

  public getSession(sessionId: string): DebugSession | undefined {
    return this.sessions.get(sessionId);
  }

  public getAllSessions(): DebugSession[] {
    return Array.from(this.sessions.values());
  }

  public setLogLevel(level: LogLevel) {
    this.config.logLevel = level;
    this.sessions.forEach(session => session.setLogLevel(level));
  }

  public enableMemoryProfiling(enable: boolean) {
    this.config.enableMemoryProfiling = enable;
    this.sessions.forEach(session => session.enableMemoryProfiling(enable));
  }

  public enableCpuProfiling(enable: boolean) {
    this.config.enableCpuProfiling = enable;
    this.sessions.forEach(session => session.enableCpuProfiling(enable));
  }

  public updateFilters(filters: DebugConfig['filters']) {
    this.config.filters = filters;
    this.sessions.forEach(session => session.updateFilters(filters));
  }

  public cleanup() {
    this.sessions.forEach(session => session.cleanup());
    this.sessions.clear();
  }
}