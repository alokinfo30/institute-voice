// Dashboard Type Definitions

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  isActive: boolean;
  createdAt?: string;
  instituteId?: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  semester: string;
  isActive: boolean;
  enrollmentCount?: number;
  instructorId?: string;
}

export interface Analytics {
  averagePerformance?: number;
  monthlyRevenue?: number;
  totalEnrollments?: number;
  completionRate?: number;
}

export interface ServiceHealth {
  id?: number;
  service: string;
  status: 'Operational' | 'Degraded' | 'Down';
  responseTime: string;
  uptime: string;
}

export interface SystemHealth {
  services?: ServiceHealth[];
  overallStatus?: 'healthy' | 'degraded' | 'critical';
  lastChecked?: string;
}

export interface DashboardData {
  users: User[];
  courses: Course[];
  analytics: Analytics;
  systemHealth: SystemHealth;
}

export interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  progress?: number;
}

export interface QuickAction {
  label: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
