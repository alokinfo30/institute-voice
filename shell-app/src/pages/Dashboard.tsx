import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
} from '@mui/material';
const GridAny: any = Grid;
import {
  School,
  VideoLibrary,
  Analytics,
  LiveHelp,
  TrendingUp,
  People,
} from '@mui/icons-material';
import { PageHeader } from '@eduable/shared-components';
import { useAuth } from '@eduable/shared-components';

const StatCard: React.FC<{
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: string;
  progress?: number;
}> = ({ title, value, subtitle, icon, color = 'primary', progress }) => {
  return (
    <Card sx={{ height: '100%' }}>
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

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const recentActivities = [
    { id: 1, action: 'Completed Physics Chapter', time: '2 hours ago', type: 'completion' },
    { id: 2, action: 'Submitted Math Assignment', time: '5 hours ago', type: 'submission' },
    { id: 3, action: 'Asked doubt in Chemistry', time: '1 day ago', type: 'doubt' },
    { id: 4, action: 'Watched Calculus video', time: '1 day ago', type: 'video' },
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'completion': return 'success';
      case 'submission': return 'info';
      case 'doubt': return 'warning';
      case 'video': return 'primary';
      default: return 'default';
    }
  };

  return (
    <Box>
      <PageHeader
        title={`Welcome back, ${user?.name || 'Student'}!`}
        subtitle="Here's what's happening with your learning today"
      />

      <GridAny container spacing={3}>
        {/* Stats Overview */}
        <GridAny item xs={12} sm={6} md={3}>
          <StatCard
            title="Courses Enrolled"
            value="12"
            subtitle="+2 this month"
            icon={<School />}
            color="primary"
            progress={75}
          />
        </GridAny>
        <GridAny item xs={12} sm={6} md={3}>
          <StatCard
            title="Videos Watched"
            value="48"
            subtitle="+12 this week"
            icon={<VideoLibrary />}
            color="info"
            progress={60}
          />
        </GridAny>
        <GridAny item xs={12} sm={6} md={3}>
          <StatCard
            title="Doubts Resolved"
            value="23"
            subtitle="95% success rate"
            icon={<LiveHelp />}
            color="success"
            progress={95}
          />
        </GridAny>
        <GridAny item xs={12} sm={6} md={3}>
          <StatCard
            title="Performance"
            value="87%"
            subtitle="Class topper"
            icon={<TrendingUp />}
            color="warning"
            progress={87}
          />
        </GridAny>

        {/* Recent Activities */}
        <GridAny item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Recent Activities
              </Typography>
              <Box sx={{ mt: 2 }}>
                {recentActivities.map((activity) => (
                  <Box
                    key={activity.id}
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
                        {activity.action}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {activity.time}
                      </Typography>
                    </Box>
                    <Chip
                      label={activity.type}
                      size="small"
                      color={getActivityColor(activity.type) as any}
                      variant="outlined"
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </GridAny>

        {/* Quick Actions */}
        <GridAny item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Quick Actions
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { label: 'Continue Learning', icon: <School /> },
                  { label: 'Ask a Doubt', icon: <LiveHelp /> },
                  { label: 'View Analytics', icon: <Analytics /> },
                  { label: 'Study Groups', icon: <People /> },
                ].map((action, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {action.icon}
                    <Typography variant="body1" fontWeight="medium">
                      {action.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </GridAny>
      </GridAny>
    </Box>
  );
};

export default Dashboard;