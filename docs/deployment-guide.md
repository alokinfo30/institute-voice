# EduAble Platform Deployment Guide

## Overview

This guide covers the complete deployment process for the EduAble platform, from local development to production multi-region deployment.

## Prerequisites

### System Requirements
- **Operating System**: Ubuntu 20.04+ / Amazon Linux 2
- **Docker**: 20.10+
- **Docker Compose**: 2.0+
- **Node.js**: 18.x (for development)
- **AWS CLI**: 2.0+

### Infrastructure Requirements
- AWS Account with appropriate permissions
- Domain name and SSL certificate
- SMTP service for email notifications
- Payment gateway accounts (Stripe, Razorpay)

## Quick Start - Local Development

### 1. Clone Repository
```bash
git clone https://github.com/eduable/platform.git
cd platform

2. Environment Setup
# Copy environment template
cp .env.example .env

# Update environment variables
nano .env

3. Start Services
bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
4. Initialize Database
bash
# Run migrations
docker-compose exec api-gateway npm run migration:run

# Seed initial data
docker-compose exec api-gateway npm run seed:run
5. Access Application
Frontend: http://localhost:5173

API: http://localhost:3000

API Docs: http://localhost:3000/api/docs

Database: localhost:3306

Production Deployment
Architecture Overview
text
CloudFront (CDN)
    ↓
Application Load Balancer
    ↓
ECS Fargate Services
    ├── API Gateway
    ├── User Service
    ├── Content Service
    ├── Analytics Service
    ├── Doubt Service
    ├── AI Service
    ├── Notification Service
    └── Payment Service
    ↓
RDS MySQL (Multi-AZ)
    ↓
ElastiCache Redis
Step 1: Infrastructure Setup
1.1 Clone Infrastructure Repository
bash
git clone https://github.com/eduable/infrastructure.git
cd infrastructure/terraform
1.2 Configure Terraform
bash
# Create terraform.tfvars
cat > production.tfvars << EOF
environment = "production"
aws_region = "us-east-1"
domain_name = "eduable.com"

# Database
db_instance_class = "db.r5.2xlarge"
db_allocated_storage = 500

# ECS
ecs_desired_count = 3
ecs_cpu = 1024
ecs_memory = 2048

# Auto Scaling
min_capacity = 3
max_capacity = 50
EOF
1.3 Deploy Infrastructure
bash
# Initialize Terraform
terraform init

# Plan deployment
terraform plan -var-file="production.tfvars"

# Apply configuration
terraform apply -var-file="production.tfvars"
Step 2: Application Deployment
2.1 Build and Push Docker Images
bash
# Build all services
./scripts/build-images.sh --version 1.0.0 --environment production

# Push to ECR
./scripts/push-images.sh --version 1.0.0
2.2 Deploy to ECS
bash
# Update ECS services
./scripts/deploy-services.sh --environment production --version 1.0.0
2.3 Run Database Migrations
bash
# Run migrations
./scripts/run-migrations.sh --environment production
Step 3: Domain and SSL Setup
3.1 Configure DNS
bash
# Get CloudFront distribution URL
terraform output cloudfront_domain_name

# Update DNS records to point to CloudFront
3.2 SSL Certificate
bash
# Certificate is automatically provisioned via ACM
# Verify certificate status
aws acm list-certificates --query 'CertificateSummaryList[]'
Configuration
Environment Variables
Required Variables
bash
# Database
DB_HOST=your-rds-endpoint
DB_PORT=3306
DB_USERNAME=eduable_app
DB_PASSWORD=secure_password

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# Redis
REDIS_HOST=your-elasticache-endpoint
REDIS_PORT=6379

# AWS
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Payment
STRIPE_SECRET_KEY=sk_test_...
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your_razorpay_secret
Optional Variables
bash
# Feature Flags
FEATURE_AI_ENABLED=true
FEATURE_GAMIFICATION_ENABLED=true
FEATURE_LIVE_CLASSES_ENABLED=true

# Rate Limiting
RATE_LIMIT_TTL=60000
RATE_LIMIT_MAX=100

# Cache
CACHE_TTL=300
CACHE_MAX_MEMORY=256mb
Service Configuration
API Gateway
yaml
# config/api-gateway.yaml
server:
  port: 3000
  cors:
    origins:
      - https://app.eduable.com
      - https://admin.eduable.com

security:
  rateLimiting:
    ttl: 60000
    limit: 100
  jwt:
    secret: ${JWT_SECRET}
    expiresIn: 7d

microservices:
  userService:
    host: localhost
    port: 3001
  contentService:
    host: localhost
    port: 3002
Database Configuration
sql
-- Database schema initialization
CREATE DATABASE IF NOT EXISTS eduable_main;
CREATE DATABASE IF NOT EXISTS eduable_users;
CREATE DATABASE IF NOT EXISTS eduable_content;
-- ... other service databases

-- Create application user
CREATE USER 'eduable_app'@'%' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON eduable_*.* TO 'eduable_app'@'%';
Monitoring and Logging
CloudWatch Dashboard
bash
# Access pre-configured dashboard
aws cloudwatch get-dashboard --dashboard-name EduAble-Production
Application Logs
bash
# View service logs
aws logs describe-log-groups --log-group-name-prefix "/eduable"

# Tail logs in real-time
aws logs tail "/eduable/application" --follow
Performance Monitoring
bash
# Check service metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/ECS \
  --metric-name CPUUtilization \
  --dimensions Name=ServiceName,Value=eduable-api-gateway \
  --start-time 2024-01-01T00:00:00Z \
  --end-time 2024-01-02T00:00:00Z \
  --period 3600 \
  --statistics Average
Scaling and Optimization
Horizontal Scaling
bash
# Scale ECS services
aws ecs update-service \
  --cluster eduable-cluster-production \
  --service eduable-api-gateway \
  --desired-count 10
Database Optimization
sql
-- Add indexes for performance
CREATE INDEX idx_student_progress ON student_progress(student_id, course_id);
CREATE INDEX idx_content_views ON content_views(content_id, viewed_at);
CREATE INDEX idx_doubt_resolution ON doubts(status, created_at);
Cache Optimization
bash
# Redis memory optimization
redis-cli config set maxmemory 1gb
redis-cli config set maxmemory-policy allkeys-lru
Security Hardening
Network Security
bash
# Update security groups
aws ec2 authorize-security-group-ingress \
  --group-id sg-123456789 \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0
SSL/TLS Configuration
nginx
# nginx configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
ssl_session_cache shared:SSL:10m;
Data Encryption
bash
# Enable RDS encryption
aws rds modify-db-instance \
  --db-instance-identifier eduable-db \
  --storage-encrypted \
  --apply-immediately
Backup and Disaster Recovery
Automated Backups
bash
# Enable RDS automated backups
aws rds modify-db-instance \
  --db-instance-identifier eduable-db \
  --backup-retention-period 35 \
  --preferred-backup-window 02:00-03:00
Cross-Region Replication
bash
# Create read replica in different region
aws rds create-db-instance-read-replica \
  --db-instance-identifier eduable-db-dr \
  --source-db-instance-identifier eduable-db \
  --region us-west-2
Disaster Recovery Plan
bash
# Failover to DR region
./scripts/disaster-recovery/failover.sh --region us-west-2
Troubleshooting
Common Issues
Service Health Checks Failing
bash
# Check service status
docker-compose ps

# View service logs
docker-compose logs api-gateway

# Check database connectivity
mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "SELECT 1;"
Performance Issues
bash
# Check resource utilization
docker stats

# Database query analysis
mysql -e "SHOW PROCESSLIST;"

# Redis memory usage
redis-cli info memory
SSL Certificate Issues
bash
# Check certificate validity
openssl s_client -connect eduable.com:443 -servername eduable.com

# Verify CloudFront distribution
aws cloudfront get-distribution --id $DISTRIBUTION_ID
Support and Maintenance
Regular Maintenance Tasks
bash
# Weekly database optimization
./scripts/maintenance/database-optimization.sh

# Monthly log rotation
./scripts/maintenance/log-rotation.sh

# Quarterly security updates
./scripts/maintenance/security-updates.sh
Monitoring Alerts
High CPU Usage: >80% for 5 minutes

Memory Pressure: >85% memory utilization

Database Connections: >80% connection pool

Error Rate: >5% HTTP 5xx errors

Response Time: >2 seconds p95

Conclusion
This deployment guide provides comprehensive instructions for deploying and maintaining the EduAble platform. For additional support, refer to:

API Documentation

Troubleshooting Guide

Security Guidelines

Performance Optimization

text

### 11.3 Developer Onboarding Guide

**docs/developer-guide.md**
```markdown
# EduAble Developer Guide

## Welcome to EduAble!

This guide will help you get started with development on the EduAble platform.

## Development Environment Setup

### Prerequisites
- Node.js 18.x
- Docker & Docker Compose
- Git
- Your favorite IDE (VS Code recommended)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/eduable/platform.git
   cd platform
Install dependencies

bash
# Install root dependencies
npm install

# Install shared dependencies
cd shared-utils && npm install && cd ..
cd shared-components && npm install && cd ..
Start development environment

bash
# Start all services
docker-compose up -d

# Or start specific services
docker-compose up api-gateway user-service
Access development tools

Frontend: http://localhost:5173

API: http://localhost:3000

API Docs: http://localhost:3000/api/docs

Database: localhost:3306

Project Structure
text
platform/
├── apps/                          # Frontend applications
│   ├── shell/                     # Main shell application
│   ├── student-app/               # Student portal
│   ├── teacher-app/               # Teacher portal
│   └── admin-app/                 # Admin portal
├── services/                      # Backend microservices
│   ├── api-gateway/               # API Gateway
│   ├── user-service/              # User management
│   ├── content-service/           # Course content
│   ├── analytics-service/         # Learning analytics
│   ├── doubt-service/             # Doubt resolution
│   ├── ai-service/                # AI features
│   ├── notification-service/      # Notifications
│   └── payment-service/           # Payments
├── shared-utils/                  # Shared utilities
├── shared-components/             # Shared React components
├── infrastructure/                # Terraform configurations
└── docs/                          # Documentation
Development Workflow
1. Feature Development
Backend Development
bash
# Navigate to service
cd services/user-service

# Start in development mode
npm run start:dev

# Run tests
npm test

# Run with debugger
npm run start:debug
Frontend Development
bash
# Navigate to app
cd apps/student-app

# Start development server
npm run dev

# Build for production
npm run build
2. Code Standards
TypeScript Configuration
typescript
// Example service interface
interface UserService {
  createUser(userData: CreateUserRequest): Promise<User>;
  findUserById(id: string): Promise<User | null>;
  updateUser(id: string, updates: Partial<User>): Promise<User>;
}

// Example DTO
class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
API Design Principles
Use RESTful conventions

Version APIs (v1, v2)

Consistent error responses

Proper status codes

Comprehensive documentation

3. Testing Strategy
Unit Tests
typescript
// Example unit test
describe('UserService', () => {
  let userService: UserService;
  let userRepository: MockUserRepository;

  beforeEach(() => {
    userRepository = new MockUserRepository();
    userService = new UserService(userRepository);
  });

  it('should create user successfully', async () => {
    const userData = { email: 'test@example.com', password: 'password123' };
    const user = await userService.createUser(userData);
    
    expect(user.email).toBe(userData.email);
    expect(userRepository.save).toHaveBeenCalled();
  });
});
Integration Tests
typescript
// Example integration test
describe('User Registration Flow', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should register user and return JWT', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'newuser@example.com',
        password: 'securePassword123',
        name: 'New User'
      })
      .expect(201);

    expect(response.body.access_token).toBeDefined();
    expect(response.body.user.email).toBe('newuser@example.com');
  });
});
4. Database Migrations
Creating Migrations
bash
# Create new migration
npm run migration:create --name=AddUserPreferences

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
Migration Example
typescript
// migration/1234567890-AddUserPreferences.ts
export class AddUserPreferences1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE users 
      ADD COLUMN preferences JSON NULL,
      ADD COLUMN notification_settings JSON NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE users 
      DROP COLUMN preferences,
      DROP COLUMN notification_settings
    `);
  }
}
Key Concepts
Microservices Architecture
Each service is independent:

Own database

Separate deployment

Independent scaling

Specific domain responsibility

Event-Driven Communication
typescript
// Example event emission
@Injectable()
export class UserRegistrationService {
  constructor(private eventEmitter: EventEmitter2) {}

  async registerUser(userData: CreateUserRequest): Promise<User> {
    const user = await this.userRepository.create(userData);
    
    // Emit user registered event
    this.eventEmitter.emit('user.registered', {
      userId: user.id,
      email: user.email,
      timestamp: new Date()
    });

    return user;
  }
}
Caching Strategy
typescript
// Example cached service method
@Injectable()
export class CourseService {
  constructor(
    private courseRepository: CourseRepository,
    private cacheService: CacheService
  ) {}

  @Cacheable({ key: 'course:#{id}', ttl: 300 })
  async getCourse(id: string): Promise<Course> {
    return this.courseRepository.findById(id);
  }

  @CacheEvict({ key: 'course:#{id}' })
  async updateCourse(id: string, updates: Partial<Course>): Promise<Course> {
    const course = await this.courseRepository.update(id, updates);
    return course;
  }
}
Common Development Tasks
Adding a New API Endpoint
Define DTOs

typescript
class CreateCourseRequest {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(CourseCategory)
  category: CourseCategory;
}
Create Controller

typescript
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Post()
  @ApiOperation({ summary: 'Create new course' })
  async createCourse(@Body() createCourseDto: CreateCourseRequest) {
    return this.coursesService.create(createCourseDto);
  }
}
Implement Service

typescript
@Injectable()
export class CoursesService {
  async create(createCourseDto: CreateCourseRequest): Promise<Course> {
    // Business logic here
    return this.courseRepository.create(createCourseDto);
  }
}
Update API Documentation

yaml
# api-spec.yaml
/courses:
  post:
    tags: [Courses]
    summary: Create new course
    requestBody:
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/CreateCourseRequest'
Adding a New Frontend Feature
Create Component

tsx
interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  onEnroll 
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{course.name}</Typography>
        <Typography variant="body2">{course.description}</Typography>
        <Button onClick={() => onEnroll(course.id)}>
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};
Add Route

tsx
// App.tsx
<Routes>
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/courses/:courseId" element={<CourseDetailPage />} />
</Routes>
API Integration

typescript
// hooks/useCourses.ts
export const useCourses = () => {
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => apiClient.get('/courses')
  });

  const enrollMutation = useMutation({
    mutationFn: (courseId: string) => 
      apiClient.post(`/courses/${courseId}/enroll`),
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
    }
  });

  return { courses, isLoading, enroll: enrollMutation.mutate };
};
Debugging and Troubleshooting
Backend Debugging
typescript
// Add logging
@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  async findUserById(id: string): Promise<User> {
    this.logger.debug(`Finding user by ID: ${id}`);
    
    try {
      const user = await this.userRepository.findById(id);
      this.logger.debug(`User found: ${user.email}`);
      return user;
    } catch (error) {
      this.logger.error(`Failed to find user: ${error.message}`, error.stack);
      throw error;
    }
  }
}
Frontend Debugging
typescript
// React Query dev tools
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
Database Debugging
sql
-- Slow query logging
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;

-- Explain query
EXPLAIN ANALYZE 
SELECT * FROM users WHERE email = 'test@example.com';
Performance Best Practices
Backend Performance
Use connection pooling

Implement caching strategically

Optimize database queries

Use pagination for large datasets

Implement background jobs for heavy operations

Frontend Performance
Implement code splitting

Use React.memo for expensive components

Optimize bundle size

Implement virtual scrolling for large lists

Use CDN for static assets

Security Considerations
Input Validation
typescript
class CreateUserRequest {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
Authentication & Authorization
typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'institute_admin')
@Controller('admin')
export class AdminController {
  // Admin-only endpoints
}
Deployment Checklist
Before deploying:

All tests passing

API documentation updated

Database migrations tested

Environment variables configured

Performance benchmarks met

Security review completed

Getting Help
Documentation: Check /docs folder

API Reference: http://localhost:3000/api/docs

Slack Channel: #eduable-dev

Issue Tracker: GitHub Issues

Code Review: Submit PRs for review

Next Steps
Explore the codebase structure

Set up your development environment

Run the test suite

Make your first contribution!

Join the development community

Happy coding! 🚀 


### 11.4 API Client Libraries

**clients/javascript/package.json**
```json
{
  "name": "@eduable/api-client",
  "version": "1.0.0",
  "description": "Official JavaScript client for EduAble API",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepublishOnly": "npm run build && npm test"
  },
  "dependencies": {
    "axios": "^1.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.2.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0"
  },
  "keywords": [
    "eduable",
    "api",
    "client",
    "education",
    "learning"
  ],
  "author": "EduAble <support@eduable.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/eduable/api-clients.git"
  }
}
clients/javascript/src/index.ts

typescript
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface EduAbleClientConfig {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  instituteId: string;
  avatar?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  instructor: User;
  enrollmentCount: number;
  rating: number;
}

export interface LearningPath {
  pathId: string;
  studentId: string;
  courseId: string;
  path: LearningStep[];
  estimatedDuration: number;
  confidence: number;
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment' | 'project';
  duration: number;
  prerequisites: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: string;
  url: string;
  duration?: number;
}

export class EduAbleClient {
  private client: AxiosInstance;

  constructor(config: EduAbleClientConfig) {
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.eduable.com/v1',
      timeout: config.timeout || 10000,
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.error('Authentication failed. Please check your API key.');
        } else if (error.response?.status === 429) {
          console.error('Rate limit exceeded. Please try again later.');
        }
        return Promise.reject(error);
      }
    );
  }

  // User Methods
  async getCurrentUser(): Promise<User> {
    const response = await this.client.get<User>('/users/me');
    return response.data;
  }

  async updateUserProfile(userId: string, updates: Partial<User>): Promise<User> {
    const response = await this.client.patch<User>(`/users/${userId}`, updates);
    return response.data;
  }

  // Course Methods
  async listCourses(options?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<{ courses: Course[]; total
