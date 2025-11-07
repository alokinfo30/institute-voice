import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Chip,
} from '@mui/material';
import {
  School,
  Groups,
  LiveHelp,
  Analytics,
  Assignment,
  Schedule,
  TrendingUp,
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
  trend?: string;
}> = ({ title, value, subtitle, icon, color = 'primary', trend }) => {
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
            {trend && (
              <Chip
                label={trend}
                size="small"
                color={trend.includes('+') ? 'success' : 'error'}
                variant="outlined"
                sx={{ mt: 1 }}
              />
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

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();

  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ['teacher-dashboard'],
    queryFn: async () => {
      const [courses, students, doubts, analytics] = await Promise.all([
        apiClient.get('/courses/teacher-courses'),
        apiClient.get('/analytics/teacher-students'),
        apiClient.get('/doubts/teacher-doubts'),
        apiClient.get('/analytics/teacher-overview'),
      ]);
      return { courses, students, doubts, analytics };
    },
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading your dashboard..." />;
  }

  const courses = dashboardData?.courses || [];
  const students = dashboardData?.students || [];
  const doubts = dashboardData?.doubts || [];
  const analytics = dashboardData?.analytics || {};

  const pendingDoubts = doubts.filter((d: any) => d.status === 'pending');
  const activeStudents = students.filter((s: any) => s.isActive);

  return (
    <Box>
      <PageHeader
        title={`Welcome, ${user?.name || 'Teacher'}!`}
        subtitle="Monitor your classes and help students succeed"
      />

      <Grid container spacing={3}>
        {/* Stats Overview */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Courses"
            value={courses.length.toString()}
            subtitle="Teaching this semester"
            icon={<School />}
            color="primary"
            trend="+2 this month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Students"
            value={activeStudents.length.toString()}
            subtitle="Active learners"
            icon={<Groups />}
            color="success"
            trend="+15% growth"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending Doubts"
            value={pendingDoubts.length.toString()}
            subtitle="Need your attention"
            icon={<LiveHelp />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Avg. Performance"
            value={`${analytics.averageScore || 0}%`}
            subtitle="Class average"
            icon={<TrendingUp />}
            color="info"
          />
        </Grid>

        {/* Recent Doubts */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Recent Doubts
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => window.location.href = '/doubts'}
                >
                  View All
                </Button>
              </Box>
              <List>
                {doubts.slice(0, 5).map((doubt: any) => (
                  <ListItem
                    key={doubt.id}
                    sx={{
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    <ListItemIcon>
                      <LiveHelp color={doubt.status === 'pending' ? 'warning' : 'success'} />
                    </ListItemIcon>
                    <ListItemText
                      primary={doubt.title}
                      secondary={
                        <Box>
                          <Typography variant="body2" color="textSecondary">
                            {doubt.studentName} • {doubt.courseName}
                          </Typography>
                          <Chip
                            label={doubt.status}
                            size="small"
                            color={doubt.status === 'pending' ? 'warning' : 'success'}
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Schedule */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Today's Schedule
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Schedule />}
                >
                  Full Schedule
                </Button>
              </Box>
              <List>
                {[
                  { time: '09:00 AM', subject: 'Mathematics - Grade 10', type: 'Live Class' },
                  { time: '11:00 AM', subject: 'Physics - Grade 12', type: 'Doubt Session' },
                  { time: '02:00 PM', subject: 'Chemistry - Grade 11', type: 'Assessment Review' },
                  { time: '04:00 PM', subject: 'Mathematics - Grade 9', type: 'Remedial Class' },
                ].map((schedule, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    <ListItemIcon>
                      <Assignment color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={schedule.subject}
                      secondary={
                        <Box>
                          <Typography variant="body2" color="textSecondary">
                            {schedule.time}
                          </Typography>
                          <Chip
                            label={schedule.type}
                            size="small"
                            variant="outlined"
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
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
              <Grid container spacing={2}>
                {[
                  {
                    label: 'Create Assignment',
                    description: 'Set up new homework or test',
                    icon: <Assignment />,
                    action: () => console.log('Create assignment'),
                    color: 'primary',
                  },
                  {
                    label: 'Schedule Class',
                    description: 'Plan live teaching session',
                    icon: <Schedule />,
                    action: () => console.log('Schedule class'),
                    color: 'success',
                  },
                  {
                    label: 'Review Doubts',
                    description: 'Help students with questions',
                    icon: <LiveHelp />,
                    action: () => window.location.href = '/doubts',
                    color: 'warning',
                  },
                  {
                    label: 'View Analytics',
                    description: 'Check class performance',
                    icon: <Analytics />,
                    action: () => window.location.href = '/analytics',
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

export default TeacherDashboard;