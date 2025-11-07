export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const USER_ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  ADMIN: 'admin',
  INSTITUTE_ADMIN: 'institute_admin'
} as const;

export const PLANS = {
  STARTER: 'starter',
  PROFESSIONAL: 'professional',
  ENTERPRISE: 'enterprise'
} as const;

export const CONTENT_TYPES = {
  VIDEO: 'video',
  PDF: 'pdf',
  QUIZ: 'quiz',
  ASSIGNMENT: 'assignment'
} as const;

export const DOUBT_STATUS = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  IN_PROGRESS: 'in_progress'
} as const;