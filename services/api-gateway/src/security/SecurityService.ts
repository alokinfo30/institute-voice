import { Express } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import { expressjwt as jwt } from 'express-jwt';
import { JWKSClient } from './JWKSClient';
import { SecurityAuditLogger } from './SecurityAuditLogger';
import { ThreatDetector } from './ThreatDetector';
import { DataEncryption } from './DataEncryption';
import { AccessControl } from './AccessControl';

export class SecurityService {
  private app: Express;
  private jwksClient: JWKSClient;
  private auditLogger: SecurityAuditLogger;
  private threatDetector: ThreatDetector;
  private dataEncryption: DataEncryption;
  private accessControl: AccessControl;

  constructor(app: Express, config: SecurityConfig) {
    this.app = app;
    this.jwksClient = new JWKSClient(config.jwksUri);
    this.auditLogger = new SecurityAuditLogger(config.auditLogConfig);
    this.threatDetector = new ThreatDetector(config.threatDetectionConfig);
    this.dataEncryption = new DataEncryption(config.encryptionConfig);
    this.accessControl = new AccessControl(config.accessControlConfig);

    this.initializeSecurity();
  }

  private initializeSecurity() {
    // Basic security headers
    this.app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'https://api.edutech.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          objectSrc: ["'none'"],
          mediaSrc: ["'self'"],
          frameSrc: ["'self'"]
        }
      },
      crossOriginEmbedderPolicy: true,
      crossOriginOpenerPolicy: true,
      crossOriginResourcePolicy: { policy: "cross-origin" },
      dnsPrefetchControl: true,
      expectCt: true,
      frameguard: true,
      hidePoweredBy: true,
      hsts: true,
      ieNoOpen: true,
      noSniff: true,
      originAgentCluster: true,
      permittedCrossDomainPolicies: true,
      referrerPolicy: true,
      xssFilter: true
    }));

    // CORS configuration
    this.app.use(cors({
      origin: this.isAllowedOrigin.bind(this),
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['X-Total-Count'],
      credentials: true,
      maxAge: 600
    }));

    // Rate limiting
    this.app.use(rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again later.'
    }));

    // JWT Authentication
    this.app.use(
      jwt({
        secret: this.jwksClient.getSigningKey.bind(this.jwksClient),
        algorithms: ['RS256'],
        credentialsRequired: true
      }).unless({ path: ['/auth/login', '/auth/register'] })
    );

    // Access Control Middleware
    this.app.use(this.accessControl.checkPermissions.bind(this.accessControl));

    // Threat Detection Middleware
    this.app.use(this.threatDetector.monitor.bind(this.threatDetector));

    // Audit Logging Middleware
    this.app.use(this.auditLogger.logRequest.bind(this.auditLogger));
  }

  private isAllowedOrigin(origin: string, callback: (err: Error | null, allow?: boolean) => void) {
    const allowedOrigins = [
      'https://edutech.com',
      'https://admin.edutech.com',
      'https://api.edutech.com'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }

  // Data Encryption Methods
  async encryptSensitiveData(data: any): Promise<string> {
    return this.dataEncryption.encrypt(data);
  }

  async decryptSensitiveData(encryptedData: string): Promise<any> {
    return this.dataEncryption.decrypt(encryptedData);
  }

  // Access Control Methods
  async checkPermission(userId: string, resource: string, action: string): Promise<boolean> {
    return this.accessControl.hasPermission(userId, resource, action);
  }

  async grantPermission(userId: string, resource: string, action: string): Promise<void> {
    await this.accessControl.grantPermission(userId, resource, action);
  }

  async revokePermission(userId: string, resource: string, action: string): Promise<void> {
    await this.accessControl.revokePermission(userId, resource, action);
  }

  // Audit Methods
  async getAuditLogs(filters: AuditLogFilters): Promise<AuditLog[]> {
    return this.auditLogger.getLogs(filters);
  }

  async logSecurityEvent(event: SecurityEvent): Promise<void> {
    await this.auditLogger.logSecurityEvent(event);
  }

  // Threat Detection Methods
  async analyzeThreatPattern(pattern: ThreatPattern): Promise<ThreatAnalysis> {
    return this.threatDetector.analyzePattern(pattern);
  }

  async blockIP(ip: string, reason: string): Promise<void> {
    await this.threatDetector.blockIP(ip, reason);
  }

  async unblockIP(ip: string): Promise<void> {
    await this.threatDetector.unblockIP(ip);
  }
}