// Cache Types
export interface CacheConfig {
  redisUrl: string;
  defaultTTL?: number;
}

export interface CacheStats {
  memoryUsage: MemoryStats;
  hitRate: number;
  keyspace: KeyspaceStats;
  operations: OperationStats;
}

export interface MemoryStats {
  used: number;
  peak: number;
  usagePercent: number;
}

export interface KeyspaceStats {
  totalKeys: number;
  expiringKeys: number;
}

export interface OperationStats {
  totalCommands: number;
  opsPerSecond: number;
}

// Security Types
export interface SecurityConfig {
  jwksUri: string;
  auditLogConfig: AuditLogConfig;
  threatDetectionConfig: ThreatDetectionConfig;
  encryptionConfig: EncryptionConfig;
  accessControlConfig: AccessControlConfig;
}

export interface AuditLogConfig {
  logLevel: string;
  storage: string;
  retention: number;
}

export interface ThreatDetectionConfig {
  ipRateLimit: number;
  bruteForceProtection: boolean;
  sqlInjectionProtection: boolean;
  xssProtection: boolean;
}

export interface EncryptionConfig {
  algorithm: string;
  keySize: number;
  secretKey: string;
}

export interface AccessControlConfig {
  defaultPolicy: 'allow' | 'deny';
  roles: RoleDefinition[];
}

export interface RoleDefinition {
  name: string;
  permissions: Permission[];
}

export interface Permission {
  resource: string;
  actions: string[];
}

export interface AuditLogFilters {
  startDate?: Date;
  endDate?: Date;
  userId?: string;
  action?: string;
  resource?: string;
  status?: string;
}

export interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  details: any;
  timestamp: Date;
}

export interface ThreatPattern {
  ipAddress: string;
  requestPattern: string[];
  frequency: number;
  timeWindow: number;
}

export interface ThreatAnalysis {
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  recommendations: string[];
  details: any;
}

// Analytics Types
export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface Report {
  summary: ReportSummary;
  details: ReportDetails;
  recommendations: ReportRecommendation[];
}

export interface ReportSummary {
  totalStudents: number;
  activeStudents: number;
  averagePerformance: number;
  completionRate: number;
}

export interface ReportDetails {
  performanceMetrics: PerformanceMetrics;
  engagementMetrics: EngagementMetrics;
  learningPatterns: LearningPattern[];
}

export interface ReportRecommendation {
  type: string;
  priority: 'low' | 'medium' | 'high';
  description: string;
  actionItems: string[];
}

// AI Types
export interface AIConfig {
  modelPath: string;
  batchSize: number;
  learningRate: number;
  epochs: number;
}

export interface TrainingConfig extends AIConfig {
  validationSplit: number;
  earlyStoppingPatience: number;
}

export interface PredictionConfig {
  confidenceThreshold: number;
  topK: number;
}

export interface ModelMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}