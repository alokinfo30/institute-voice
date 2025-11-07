import {
  Assessment,
  LearningResource,
  ExamPattern,
  MockTest,
  RevisionSchedule,
  DateRange,
  ResourceConstraints,
  FacultyAllocation,
  EquipmentAllocation,
  UtilizationMetrics,
  Student,
  SubjectReadiness,
  WeakArea,
  RecommendedAction,
  ScheduledTest,
  TopicCoverage,
  AnalysisSession,
  BatchMetrics,
  StudentMetrics,
  FacultyMetrics,
  ExamMetrics,
} from './models';

export interface CreateBatchParams {
  courseId: string;
  facultyIds: string[];
  schedule: BatchSchedule;
  capacity: number;
  startDate: Date;
  endDate: Date;
  batchName: string;
  description?: string;
}

export interface BatchSchedule {
  weeklySchedule: DaySchedule[];
  exceptions: ScheduleException[];
}

export interface DaySchedule {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  slots: TimeSlot[];
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  subjectId: string;
  facultyId: string;
  roomId: string;
}

export interface ScheduleException {
  date: Date;
  type: 'holiday' | 'extra_class' | 'cancelled';
  reason: string;
  alternateSlot?: TimeSlot;
}

export interface Batch {
  id: string;
  courseId: string;
  batchName: string;
  description: string;
  facultyIds: string[];
  schedule: BatchSchedule;
  capacity: number;
  startDate: Date;
  endDate: Date;
  students: string[];
  status: 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface CurriculumParams {
  courseId: string;
  targetExam: string;
  duration: number;
  specialization?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface Curriculum {
  id: string;
  courseId: string;
  topics: CurriculumTopic[];
  duration: number;
  examPreparation: ExamPreparation;
  assessments: Assessment[];
  resources: LearningResource[];
}

export interface CurriculumTopic {
  id: string;
  name: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  learningObjectives: string[];
  resources: LearningResource[];
}

export interface ExamPreparation {
  examPattern: ExamPattern;
  mockTests: MockTest[];
  revisionSchedule: RevisionSchedule;
}

export interface BatchPerformanceMetrics {
  batchId: string;
  overallPerformance: number;
  topPerformers: StudentPerformance[];
  needsAttention: StudentPerformance[];
  attendanceRate: number;
  testScores: TestScore[];
  progressTracking: ProgressMetrics;
}

export interface StudentPerformance {
  studentId: string;
  name: string;
  overallScore: number;
  attendance: number;
  testScores: TestScore[];
  improvement: number;
}

export interface TestScore {
  testId: string;
  score: number;
  maxScore: number;
  date: Date;
  type: 'mock' | 'practice' | 'final';
}

export interface ProgressMetrics {
  syllabusCoverage: number;
  averageScores: number[];
  improvementRate: number;
  conceptMastery: ConceptMastery[];
}

export interface ConceptMastery {
  conceptId: string;
  name: string;
  masteryLevel: number;
  confidenceScore: number;
}

export interface OptimizationParams {
  timeframe: DateRange;
  batchIds: string[];
  constraints?: ResourceConstraints;
}

export interface ResourceAllocation {
  rooms: RoomAllocation[];
  faculty: FacultyAllocation[];
  equipment: EquipmentAllocation[];
  utilization: UtilizationMetrics;
}

export interface RoomAllocation {
  roomId: string;
  schedule: TimeSlot[];
  utilization: number;
}

export interface FacultyAssignmentParams {
  batchIds: string[];
  subjectIds: string[];
  timeframe?: DateRange;
}

export interface FacultyAssignment {
  facultyId: string;
  batchId: string;
  subjectId: string;
  schedule: TimeSlot[];
  workload: number;
}

export interface StudentProgress {
  student: Student;
  performance: StudentPerformance;
  examReadiness: ExamReadiness;
  recommendations: LearningRecommendation[];
}

export interface ExamReadiness {
  overallReadiness: number;
  subjectWiseReadiness: SubjectReadiness[];
  weakAreas: WeakArea[];
  recommendedActions: RecommendedAction[];
}

export interface LearningRecommendation {
  type: 'practice' | 'revision' | 'new_topic' | 'mock_test';
  priority: 'high' | 'medium' | 'low';
  topic?: string;
  reason: string;
  resources: LearningResource[];
}

export interface MockTestParams {
  batchId: string;
  examType: string;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  duration?: number;
}

export interface MockTestSchedule {
  tests: ScheduledTest[];
  coverage: TopicCoverage[];
  analysisSchedule: AnalysisSession[];
}

export interface ReportParams {
  startDate: Date;
  endDate: Date;
  includeFinancials: boolean;
  includePerformance: boolean;
  includeAttendance: boolean;
}

export interface InstituteReport {
  batchMetrics: BatchMetrics[];
  studentMetrics: StudentMetrics;
  facultyMetrics: FacultyMetrics;
  examMetrics: ExamMetrics;
  generatedAt: Date;
  period: DateRange;
}