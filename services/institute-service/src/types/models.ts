import { TimeSlot, FacultyAssignment, BatchPerformanceMetrics, ProgressMetrics } from './index';

export interface Assessment {
  id: string;
  name: string;
  type: 'quiz' | 'test' | 'assignment';
  duration: number;
  totalMarks: number;
  questions: Question[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Question {
  id: string;
  text: string;
  type: 'mcq' | 'subjective' | 'numerical';
  marks: number;
  options?: string[];
  correctAnswer?: string | number;
  rubric?: string;
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'document' | 'quiz' | 'interactive';
  url: string;
  duration?: number;
  description: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ExamPattern {
  sections: ExamSection[];
  totalDuration: number;
  totalMarks: number;
  negativeMarking?: boolean;
  passingCriteria: PassingCriteria;
}

export interface ExamSection {
  name: string;
  duration: number;
  marks: number;
  questionTypes: QuestionType[];
}

export interface QuestionType {
  type: string;
  count: number;
  marksPerQuestion: number;
}

export interface PassingCriteria {
  overallPercentage: number;
  sectionWisePercentage?: { [key: string]: number };
}

export interface MockTest {
  id: string;
  name: string;
  pattern: ExamPattern;
  questions: Question[];
  scheduledDate: Date;
  duration: number;
}

export interface RevisionSchedule {
  topics: RevisionTopic[];
  duration: number;
  priority: 'high' | 'medium' | 'low';
}

export interface RevisionTopic {
  topicId: string;
  name: string;
  duration: number;
  resources: LearningResource[];
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface ResourceConstraints {
  maxRooms?: number;
  maxFacultyHours?: number;
  preferredTiming?: TimePreference;
  excludedSlots?: TimeSlot[];
}

export interface TimePreference {
  preferredDays: string[];
  preferredHours: string[];
}

export interface FacultyAllocation {
  facultyId: string;
  assignments: FacultyAssignment[];
  totalHours: number;
  workloadDistribution: WorkloadMetrics;
}

export interface EquipmentAllocation {
  equipmentId: string;
  type: string;
  schedule: TimeSlot[];
  utilization: number;
}

export interface UtilizationMetrics {
  roomUtilization: number;
  facultyUtilization: number;
  equipmentUtilization: number;
  peakHours: TimeSlot[];
  recommendations: string[];
}

export interface WorkloadMetrics {
  teachingHours: number;
  preparationHours: number;
  assessmentHours: number;
  consultationHours: number;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  enrolledBatches: string[];
  attendance: AttendanceRecord[];
  performance: PerformanceRecord[];
}

export interface AttendanceRecord {
  date: Date;
  batchId: string;
  status: 'present' | 'absent' | 'late';
  duration?: number;
}

export interface PerformanceRecord {
  assessmentId: string;
  score: number;
  date: Date;
  feedback?: string;
}

export interface SubjectReadiness {
  subjectId: string;
  name: string;
  readinessScore: number;
  strongTopics: string[];
  weakTopics: string[];
}

export interface WeakArea {
  topicId: string;
  name: string;
  currentScore: number;
  requiredScore: number;
  suggestedResources: LearningResource[];
}

export interface RecommendedAction {
  type: 'practice' | 'revision' | 'consultation';
  priority: 'high' | 'medium' | 'low';
  description: string;
  deadline?: Date;
  resources?: LearningResource[];
}

export interface ScheduledTest {
  testId: string;
  date: Date;
  duration: number;
  type: string;
  participants: string[];
}

export interface TopicCoverage {
  topicId: string;
  name: string;
  covered: boolean;
  testCount: number;
  averageScore: number;
}

export interface AnalysisSession {
  date: Date;
  topics: string[];
  duration: number;
  facultyId: string;
}

export interface BatchMetrics {
  batchId: string;
  performance: BatchPerformanceMetrics;
  attendance: AttendanceMetrics;
  progress: ProgressMetrics;
}

export interface StudentMetrics {
  totalStudents: number;
  activeStudents: number;
  performanceDistribution: PerformanceDistribution;
  attendanceStats: AttendanceStats;
}

export interface FacultyMetrics {
  totalFaculty: number;
  workloadDistribution: WorkloadDistribution;
  performanceRating: FacultyRating[];
  attendanceStats: AttendanceStats;
}

export interface ExamMetrics {
  totalExams: number;
  averageScores: SubjectWiseScore[];
  passRate: number;
  topPerformers: StudentResult[];
}

export interface AttendanceMetrics {
  overallRate: number;
  monthlyRates: MonthlyRate[];
  absenteeism: AbsenteeismReport[];
}

export interface PerformanceDistribution {
  excellent: number;
  good: number;
  average: number;
  needsImprovement: number;
}

export interface AttendanceStats {
  averageAttendance: number;
  regularStudents: number;
  irregularStudents: number;
}

export interface WorkloadDistribution {
  overloaded: number;
  optimal: number;
  underutilized: number;
}

export interface FacultyRating {
  facultyId: string;
  rating: number;
  feedback: string[];
}

export interface SubjectWiseScore {
  subjectId: string;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
}

export interface StudentResult {
  studentId: string;
  name: string;
  score: number;
  rank: number;
}

export interface MonthlyRate {
  month: string;
  rate: number;
}

export interface AbsenteeismReport {
  studentId: string;
  consecutiveAbsences: number;
  totalAbsences: number;
}