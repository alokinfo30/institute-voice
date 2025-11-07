export interface LearningStyle {
  visual: number;
  auditory: number;
  readWrite: number;
  kinesthetic: number;
}

export interface StudentProfile {
  id: string;
  performanceHistory: number[];
  learningStyleScore: number;
  topicPreferences: number[];
  pacePreference: number;
  difficultyPreference: number;
  subjects: string[];
  lastActive: Date;
  completedLessons: string[];
  quizScores: {
    quizId: string;
    score: number;
    timestamp: Date;
  }[];
}

export interface ContentRecommendation {
  contentId: string;
  title: string;
  type: 'video' | 'article' | 'quiz' | 'interactive';
  relevanceScore: number;
  difficulty: number;
  estimatedTimeMinutes: number;
  prerequisites: string[];
  learningObjectives: string[];
  format: string;
  topics: string[];
}

export interface PerformancePrediction {
  predictedScore: number;
  confidenceInterval: [number, number];
  areas: {
    topic: string;
    strength: number;
  }[];
  recommendations: {
    topic: string;
    action: string;
    priority: 'high' | 'medium' | 'low';
  }[];
}

export interface LearningPattern {
  timeOfDay: {
    morning: number;
    afternoon: number;
    evening: number;
    night: number;
  };
  sessionDuration: number;
  preferredContentTypes: string[];
  completionRates: {
    [contentType: string]: number;
  };
  engagementMetrics: {
    videoPauseFrequency: number;
    notesTaken: number;
    questionsAsked: number;
    revisitFrequency: number;
  };
}

export interface AdaptiveLearningPath {
  studentId: string;
  currentLevel: number;
  targetLevel: number;
  milestones: {
    id: string;
    type: string;
    status: 'completed' | 'in-progress' | 'pending';
    score?: number;
  }[];
  adaptiveRecommendations: ContentRecommendation[];
  learningVelocity: number;
  masteryThresholds: {
    [subject: string]: number;
  };
}