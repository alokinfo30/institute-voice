import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Button,
} from '@mui/material';
import {
  School,
  VideoLibrary,
  Analytics,
  LiveHelp,
  TrendingUp,
  Assignment,
  Schedule,
} from '@mui/icons-material';
import { PageHeader, LoadingSpinner } from '@eduable/shared-components';
import { useAuth } from '@eduable/shared-components';
import { apiClient } from '@eduable/shared-utils';
import { useQuery } from '@tanstack/react-query';

const StatCard: React.FC<{
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: string;
  progress?: number;
}> = ({ title, value, subtitle, icon, color = 'primary', progress }) => {
  return (
    <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent>
        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {title}
            </Typography>
            <Typography variant="h4" component="div" fontWeight="bold">
              {value}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
            {progress !== undefined && (
              <Box sx={{ mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ height: 8, borderRadius: 4 }}
                  color={color as any}
                />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: `${color}.light`,
              color: `${color}.contrastText`,
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ['student-dashboard'],
    queryFn: async () => {
      const [courses, progress, doubts] = await Promise.all([
        apiClient.get('/courses/my-courses'),
        apiClient.get('/analytics/my-progress'),
        apiClient.get('/doubts/my-doubts?limit=5'),
      ]);
      return { courses, progress, doubts };
    },
  });

  const { data: recentActivities } = useQuery({
    queryKey: ['recent-activities'],
    queryFn: () => apiClient.get('/analytics/recent-activities'),
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading your dashboard..." />;
  }

  const courses = dashboardData?.courses || [];
  const progress = dashboardData?.progress || {};
  const doubts = dashboardData?.doubts?.doubts || [];

  const ongoingCourses = courses.filter((course: any) => !course.completed);
  const completedCourses = courses.filter((course: any) => course.completed);

  return (
    <Box>
      <PageHeader
        title={`Welcome back, ${user?.name || 'Student'}!`}
        subtitle="Continue your learning journey and track your progress"
      />

      <Grid container spacing={3}>
        {/* Stats Overview */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Ongoing Courses"
            value={ongoingCourses.length.toString()}
            subtitle={`${completedCourses.length} completed`}
            icon={<School />}
            color="primary"
            progress={(completedCourses.length / courses.length) * 100}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Learning Progress"
            value={`${progress.overallProgress || 0}%`}
            subtitle="Overall completion"
            icon={<TrendingUp />}
            color="success"
            progress={progress.overallProgress || 0}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Doubts"
            value={doubts.filter((d: any) => d.status === 'pending').length.toString()}
            subtitle="Need attention"
            icon={<LiveHelp />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Study Time"
            value={`${Math.round((progress.totalTimeSpent || 0) / 60)}h`}
            subtitle="This week"
            icon={<Schedule />}
            color="info"
          />
        </Grid>

        {/* Ongoing Courses */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Ongoing Courses
              </Typography>
              <Box sx={{ mt: 2 }}>
                {ongoingCourses.length === 0 ? (
                  <Typography color="textSecondary" textAlign="center" py={4}>
                    No ongoing courses. Enroll in a course to get started!
                  </Typography>
                ) : (
                  ongoingCourses.slice(0, 3).map((course: any) => (
                    <Box
                      key={course.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 2,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        '&:last-child': { borderBottom: 'none' },
                      }}
                    >
                      <Box>
                        <Typography variant="body1" fontWeight="medium">
                          {course.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {course.description}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={course.progress || 0}
                            sx={{ width: 200, height: 6, borderRadius: 3 }}
                          />
                          <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                            {course.progress || 0}% complete
                          </Typography>
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => window.location.href = `/courses/${course.id}`}
                      >
                        Continue
                      </Button>
                    </Box>
                  ))
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Recent Activities
              </Typography>
              <Box sx={{ mt: 2 }}>
                {(recentActivities || []).slice(0, 5).map((activity: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      py: 1.5,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 32,
                        height: 32,
                      }}
                    >
                      {activity.type === 'video' && <VideoLibrary fontSize="small" />}
                      {activity.type === 'quiz' && <Assignment fontSize="small" />}
                      {activity.type === 'doubt' && <LiveHelp fontSize="small" />}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight="medium">
                        {activity.title}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {activity.time}
                      </Typography>
                    </Box>
                    <Chip
                      label={activity.type}
                      size="small"
                      color={
                        activity.type === 'video' ? 'primary' :
                        activity.type === 'quiz' ? 'secondary' : 'default'
                      }
                      variant="outlined"
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Quick Actions
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[
                  {
                    label: 'Continue Learning',
                    description: 'Pick up where you left off',
                    icon: <VideoLibrary />,
                    action: () => navigateToLastCourse(),
                    color: 'primary',
                  },
                  {
                    label: 'Ask a Doubt',
                    description: 'Get help from teachers',
                    icon: <LiveHelp />,
                    action: () => window.location.href = '/doubts',
                    color: 'warning',
                  },
                  {
                    label: 'View Progress',
                    description: 'Check your performance',
                    icon: <Analytics />,
                    action: () => window.location.href = '/performance',
                    color: 'success',
                  },
                  {
                    label: 'Upcoming Tests',
                    description: 'Prepare for assessments',
                    icon: <Assignment />,
                    action: () => window.location.href = '/tests',
                    color: 'info',
                  },
                ].map((action, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4,
                        },
                      }}
                      onClick={action.action}
                    >
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: '50%',
                            bgcolor: `${action.color}.light`,
                            color: `${action.color}.contrastText`,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 64,
                            mb: 2,
                          }}
                        >
                          {action.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {action.label}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {action.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const navigateToLastCourse = () => {
  // Implementation to navigate to the last accessed course
  window.location.href = '/courses';
};

export default StudentDashboard;