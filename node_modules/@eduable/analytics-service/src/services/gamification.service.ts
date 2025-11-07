import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentProgress } from '../entities/student-progress.entity';

@Injectable()
export class GamificationService {
  constructor(
    @InjectRepository(StudentProgress)
    private progressRepository: Repository<StudentProgress>,
  ) {}

  async calculateXP(studentId: string, activity: any): Promise<number> {
    const baseXP = this.getBaseXP(activity.type);
    const multipliers = await this.calculateMultipliers(studentId, activity);
    
    return Math.round(baseXP * multipliers.total);
  }

  private getBaseXP(activityType: string): number {
    const xpValues = {
      'video_watch': 10,
      'quiz_complete': 25,
      'assignment_submit': 50,
      'doubt_ask': 15,
      'doubt_answer': 30,
      'peer_help': 20,
      'streak_bonus': 5,
      'challenge_complete': 100
    };
    
    return xpValues[activityType] || 5;
  }

  private async calculateMultipliers(studentId: string, activity: any) {
    const multipliers = {
      streak: await this.getStreakMultiplier(studentId),
      difficulty: this.getDifficultyMultiplier(activity.difficulty),
      timing: this.getTimingMultiplier(activity),
      mastery: await this.getMasteryMultiplier(studentId, activity.topic),
      engagement: await this.getEngagementMultiplier(studentId)
    };

    return {
      ...multipliers,
      total: Object.values(multipliers).reduce((a, b) => a * b, 1)
    };
  }

  async awardAchievements(studentId: string, activity: any) {
    const unlockedAchievements = [];
    const studentProfile = await this.getStudentProfile(studentId);

    // Check for various achievement types
    const achievementChecks = [
      this.checkCompletionAchievements(studentProfile, activity),
      this.checkMasteryAchievements(studentProfile, activity),
      this.checkSocialAchievements(studentProfile, activity),
      this.checkStreakAchievements(studentProfile, activity),
      this.checkChallengeAchievements(studentProfile, activity)
    ];

    const results = await Promise.all(achievementChecks);
    const newAchievements = results.flat();

    if (newAchievements.length > 0) {
      await this.grantAchievements(studentId, newAchievements);
      unlockedAchievements.push(...newAchievements);
    }

    return {
      unlocked: unlockedAchievements,
      progress: await this.getAchievementProgress(studentId),
      nextMilestones: await this.getNextMilestones(studentId)
    };
  }

  private async checkCompletionAchievements(profile: any, activity: any) {
    const achievements = [];
    
    // Course completion achievements
    if (activity.type === 'course_complete') {
      const coursesCompleted = profile.coursesCompleted + 1;
      
      if (coursesCompleted === 1) {
        achievements.push('first_course_complete');
      }
      
      if (coursesCompleted === 5) {
        achievements.push('five_courses_complete');
      }
      
      if (coursesCompleted === 10) {
        achievements.push('ten_courses_complete');
      }
    }

    // Content consumption achievements
    const contentConsumed = profile.contentConsumed + 1;
    if (contentConsumed >= 100) {
      achievements.push('content_explorer');
    }

    return achievements;
  }

  async createLearningChallenges(studentId: string, courseId: string) {
    const studentLevel = await this.getStudentLevel(studentId);
    const weakAreas = await this.getWeakAreas(studentId);
    const learningGoals = await this.getLearningGoals(studentId);

    const challenges = [
      ...await this.createMasteryChallenges(studentId, weakAreas),
      ...await this.createStreakChallenges(studentId),
      ...await this.createSocialChallenges(studentId),
      ...await this.createExplorationChallenges(studentId, courseId)
    ];

    return challenges
      .filter(challenge => challenge.difficulty <= studentLevel + 2)
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 5); // Return top 5 challenges
  }

  private async createMasteryChallenges(studentId: string, weakAreas: string[]) {
    return weakAreas.map(area => ({
      id: `mastery-${area}-${Date.now()}`,
      type: 'mastery',
      title: `Master ${area}`,
      description: `Complete 3 advanced exercises in ${area}`,
      area: area,
      difficulty: await this.getTopicDifficulty(area),
      reward: {
        xp: 150,
        badge: `${area}_master`,
        points: 100
      },
      requirements: {
        exercisesCompleted: 3,
        masteryLevel: 0.8,
        timeLimit: 7 * 24 * 60 * 60 * 1000 // 7 days
      },
      progress: await this.getMasteryProgress(studentId, area)
    }));
  }

  async getLeaderboard(instituteId: string, timeframe: 'weekly' | 'monthly' | 'alltime' = 'weekly') {
    const leaderboardData = await this.calculateLeaderboard(instituteId, timeframe);
    
    return {
      timeframe,
      generatedAt: new Date(),
      leaderboard: leaderboardData.map((entry, index) => ({
        rank: index + 1,
        studentId: entry.studentId,
        studentName: entry.name,
        xp: entry.xp,
        level: entry.level,
        avatar: entry.avatar,
        progress: entry.progress,
        badges: entry.badges,
        streak: entry.streak
      })),
      categories: {
        mostImproved: await this.getMostImprovedStudents(instituteId, timeframe),
        topContributors: await this.getTopContributors(instituteId, timeframe),
        consistency: await this.getMostConsistentStudents(instituteId, timeframe)
      },
      personalRank: await this.getPersonalRank(instituteId, timeframe)
    };
  }

  async generateEngagementReport(studentId: string) {
    const engagementMetrics = await this.calculateEngagementMetrics(studentId);
    const motivationAnalysis = await this.analyzeMotivation(studentId);
    const recommendations = await this.generateEngagementRecommendations(engagementMetrics);

    return {
      studentId,
      period: 'last_30_days',
      engagementScore: engagementMetrics.overallScore,
      metrics: {
        consistency: engagementMetrics.consistency,
        participation: engagementMetrics.participation,
        progress: engagementMetrics.progress,
        social: engagementMetrics.social
      },
      motivation: {
        level: motivationAnalysis.level,
        drivers: motivationAnalysis.drivers,
        barriers: motivationAnalysis.barriers
      },
      recommendations,
      comparison: await this.compareWithPeers(studentId, engagementMetrics)
    };
  }

  private async analyzeMotivation(studentId: string) {
    const activities = await this.getRecentActivities(studentId);
    const patterns = this.analyzeActivityPatterns(activities);
    
    return {
      level: this.calculateMotivationLevel(patterns),
      drivers: this.identifyMotivationDrivers(patterns),
      barriers: this.identifyMotivationBarriers(patterns),
      suggestions: this.generateMotivationSuggestions(patterns)
    };
  }
}