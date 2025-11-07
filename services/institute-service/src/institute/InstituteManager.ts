import { BatchManager } from './BatchManager';
import { CurriculumEngine } from './CurriculumEngine';
import { ExamTracker } from './ExamTracker';
import { FacultyManager } from './FacultyManager';
import { PerformanceAnalyzer } from './PerformanceAnalyzer';
import { StudentManager } from './StudentManager';
import { ScheduleOptimizer } from './ScheduleOptimizer';
import { ResourceAllocator } from './ResourceAllocator';

export class InstituteManager {
  private batchManager: BatchManager;
  private curriculumEngine: CurriculumEngine;
  private examTracker: ExamTracker;
  private facultyManager: FacultyManager;
  private performanceAnalyzer: PerformanceAnalyzer;
  private studentManager: StudentManager;
  private scheduleOptimizer: ScheduleOptimizer;
  private resourceAllocator: ResourceAllocator;

  constructor(instituteId: string) {
    this.batchManager = new BatchManager(instituteId);
    this.curriculumEngine = new CurriculumEngine(instituteId);
    this.examTracker = new ExamTracker(instituteId);
    this.facultyManager = new FacultyManager(instituteId);
    this.performanceAnalyzer = new PerformanceAnalyzer(instituteId);
    this.studentManager = new StudentManager(instituteId);
    this.scheduleOptimizer = new ScheduleOptimizer(instituteId);
    this.resourceAllocator = new ResourceAllocator(instituteId);
  }

  // Batch Management
  async createBatch(params: CreateBatchParams): Promise<Batch> {
    const { courseId, facultyIds, schedule, capacity } = params;
    
    // Validate faculty availability
    await this.facultyManager.validateAvailability(facultyIds, schedule);
    
    // Check resource availability
    await this.resourceAllocator.validateResources(schedule);
    
    // Create optimized batch schedule
    const optimizedSchedule = await this.scheduleOptimizer.generateSchedule({
      facultyIds,
      schedule,
      courseId
    });

    return this.batchManager.createBatch({
      ...params,
      schedule: optimizedSchedule
    });
  }

  // Curriculum Management
  async generateCurriculum(params: CurriculumParams): Promise<Curriculum> {
    const { courseId, targetExam, duration } = params;
    
    // Get exam requirements
    const examRequirements = await this.examTracker.getExamRequirements(targetExam);
    
    // Generate personalized curriculum
    return this.curriculumEngine.generate({
      courseId,
      examRequirements,
      duration,
      includeMockTests: true,
      includeRevisions: true
    });
  }

  // Performance Tracking
  async trackBatchPerformance(batchId: string): Promise<BatchPerformanceMetrics> {
    const students = await this.studentManager.getStudentsByBatch(batchId);
    const performanceData = await Promise.all(
      students.map(student => 
        this.performanceAnalyzer.analyzeStudentPerformance(student.id)
      )
    );

    return this.performanceAnalyzer.aggregateBatchPerformance(performanceData);
  }

  // Resource Optimization
  async optimizeResources(params: OptimizationParams): Promise<ResourceAllocation> {
    const { timeframe, batchIds } = params;
    
    // Get current allocations
    const currentAllocations = await this.resourceAllocator.getCurrentAllocations(batchIds);
    
    // Generate optimized allocation
    return this.resourceAllocator.optimizeAllocation({
      currentAllocations,
      timeframe,
      constraints: {
        maxClassSize: 40,
        preferredClassDuration: 120, // minutes
        breakDuration: 15 // minutes
      }
    });
  }

  // Faculty Management
  async assignFaculty(params: FacultyAssignmentParams): Promise<FacultyAssignment[]> {
    const { batchIds, subjectIds } = params;
    
    // Get faculty rankings
    const facultyRankings = await this.facultyManager.getFacultyRankings(subjectIds);
    
    // Get faculty availability
    const availability = await this.facultyManager.getFacultyAvailability(
      facultyRankings.map(f => f.facultyId)
    );
    
    // Optimize assignments
    return this.scheduleOptimizer.optimizeFacultyAssignments({
      batchIds,
      facultyRankings,
      availability
    });
  }

  // Student Progress Tracking
  async trackStudentProgress(studentId: string): Promise<StudentProgress> {
    // Get student data
    const student = await this.studentManager.getStudent(studentId);
    
    // Analyze performance
    const performance = await this.performanceAnalyzer.analyzeStudentPerformance(studentId);
    
    // Get exam readiness
    const examReadiness = await this.examTracker.calculateExamReadiness(
      studentId,
      student.targetExam
    );
    
    // Generate recommendations
    const recommendations = await this.curriculumEngine.generateRecommendations({
      studentId,
      performance,
      examReadiness
    });

    return {
      student,
      performance,
      examReadiness,
      recommendations
    };
  }

  // Mock Test Management
  async scheduleMockTests(params: MockTestParams): Promise<MockTestSchedule> {
    const { batchId, examType, frequency } = params;
    
    // Get exam pattern
    const examPattern = await this.examTracker.getExamPattern(examType);
    
    // Get batch schedule
    const batchSchedule = await this.batchManager.getBatchSchedule(batchId);
    
    // Generate mock test schedule
    return this.scheduleOptimizer.generateMockTestSchedule({
      examPattern,
      batchSchedule,
      frequency,
      includeAnalysis: true
    });
  }

  // Report Generation
  async generateInstituteReport(params: ReportParams): Promise<InstituteReport> {
    const {
      startDate,
      endDate,
      includeFinancials,
      includePerformance,
      includeAttendance
    } = params;

    const [
      batchMetrics,
      studentMetrics,
      facultyMetrics,
      examMetrics
    ] = await Promise.all([
      this.batchManager.getBatchMetrics({ startDate, endDate }),
      this.studentManager.getStudentMetrics({ startDate, endDate }),
      this.facultyManager.getFacultyMetrics({ startDate, endDate }),
      this.examTracker.getExamMetrics({ startDate, endDate })
    ]);

    return {
      batchMetrics,
      studentMetrics,
      facultyMetrics,
      examMetrics,
      generatedAt: new Date(),
      period: { startDate, endDate }
    };
  }
}