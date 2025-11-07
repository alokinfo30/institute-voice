import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import People from '@mui/icons-material/People';
import School from '@mui/icons-material/School';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Payment from '@mui/icons-material/Payment';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Schedule from '@mui/icons-material/Schedule';

import { PageHeader, LoadingSpinner, useAuth } from '@eduable/shared-components';
import DataTable from '@eduable/shared-components/src/components/DataTable';
import { apiClient } from '@eduable/shared-utils';
import { useQuery } from '@tanstack/react-query';
import ErrorBoundary from '../components/ErrorBoundary';
import type {
  User,
  DashboardData,
  StatCardProps,
  QuickAction,
  ServiceHealth,
} from '../types/dashboard.types';

// Constants
const RECENT_USERS_LIMIT = 5;
const DEFAULT_SYSTEM_STATUS_DATA: ServiceHealth[] = [
  { id: 1, service: 'API Gateway', status: 'Operational', responseTime: '45ms', uptime: '99.9%' },
  { id: 2, service: 'User Service', status: 'Operational', responseTime: '23ms', uptime: '99.8%' },
  { id: 3, service: 'Content Service', status: 'Operational', responseTime: '67ms', uptime: '99.7%' },
  { id: 4, service: 'Database', status: 'Operational', responseTime: '12ms', uptime: '100%' },
  { id: 5, service: 'Redis Cache', status: 'Operational', responseTime: '5ms', uptime: '99.9%' },
];

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, color = 'primary', progress }) => {
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
            {progress !== undefined && progress !== null && !isNaN(progress) && (
              <Box sx={{ mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={Math.min(100, Math.max(0, progress))}
                  sx={{ height: 8, borderRadius: 4 }}
                  color={color}
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

const AdminDashboardContent: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: dashboardData,
    isLoading,
    error,
    refetch,
  } = useQuery<DashboardData>({
    queryKey: ['admin-dashboard'],
    queryFn: async (): Promise<DashboardData> => {
      try {
        const [usersResponse, coursesResponse, analyticsResponse, systemHealthResponse] =
          await Promise.all([
            apiClient.get('/admin/users'),
            apiClient.get('/admin/courses'),
            apiClient.get('/admin/analytics'),
            apiClient.get('/admin/system-health'),
          ]);

        return {
          users: usersResponse.data || [],
          courses: coursesResponse.data || [],
          analytics: analyticsResponse.data || {},
          systemHealth: systemHealthResponse.data || {},
        };
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        throw new Error('Failed to load dashboard data. Please try again.');
      }
    },
    retry: 2,
    staleTime: 30000, // 30 seconds
  });

  // Handle loading state
  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading admin dashboard..." />;
  }

  // Handle error state
  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" action={
          <Button color="inherit" size="small" onClick={() => refetch()}>
            Retry
          </Button>
        }>
          <AlertTitle>Error Loading Dashboard</AlertTitle>
          {error instanceof Error ? error.message : 'An unexpected error occurred'}
        </Alert>
      </Box>
    );
  }

  // Safely extract data with defaults
  const users: User[] = dashboardData?.users || [];
  const courses = dashboardData?.courses || [];
  const analytics = dashboardData?.analytics || {};
  const systemHealth = dashboardData?.systemHealth || {};

  // Safe calculations with edge case handling
  const activeUsers = users.filter((u) => u.isActive);
  const activeUsersCount = activeUsers.length;
  const totalUsersCount = users.length;
  const activePercentage = totalUsersCount > 0 ? (activeUsersCount / totalUsersCount) * 100 : 0;

  const recentUsers = users.slice(0, RECENT_USERS_LIMIT);

  // System status data - use real data if available, fallback to defaults
  const systemStatusData: ServiceHealth[] = 
    systemHealth?.services && systemHealth.services.length > 0
      ? systemHealth.services.map((service, index) => ({ ...service, id: index + 1 }))
      : DEFAULT_SYSTEM_STATUS_DATA;

  const systemStatusColumns = [
    { field: 'service', headerName: 'Service', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params: any) => {
        const colorMap: Record<string, 'success' | 'warning' | 'error'> = {
          Operational: 'success',
          Degraded: 'warning',
          Down: 'error',
        };
        return (
          <Chip
            label={params.value}
            color={colorMap[params.value] || 'default'}
            size="small"
          />
        );
      },
    },
    { field: 'responseTime', headerName: 'Response Time', flex: 1 },
    { field: 'uptime', headerName: 'Uptime', flex: 1 },
  ];

  // Quick actions configuration
  const quickActions: QuickAction[] = [
    {
      label: 'User Management',
      description: 'Manage students and teachers',
      icon: <People />,
      path: '/users',
      color: 'primary',
    },
    {
      label: 'Course Setup',
      description: 'Create and manage courses',
      icon: <School />,
      path: '/courses',
      color: 'success',
    },
    {
      label: 'Billing & Plans',
      description: 'Manage subscriptions',
      icon: <Payment />,
      path: '/billing',
      color: 'warning',
    },
    {
      label: 'System Settings',
      description: 'Configure institute settings',
      icon: <TrendingUp />,
      path: '/settings',
      color: 'info',
    },
  ];

  return (
    <Box>
      <PageHeader
        title={`Admin Dashboard - ${user?.instituteId || 'Institute'}`}
        subtitle="Monitor system performance and manage your institute"
      />

      <Grid container spacing={3}>
        {/* Stats Overview */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value={totalUsersCount.toString()}
            subtitle={`${activeUsersCount} active`}
            icon={<People />}
            color="primary"
            progress={activePercentage}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Courses"
            value={courses.length.toString()}
            subtitle="This semester"
            icon={<School />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Performance"
            value={`${analytics.averagePerformance || 0}%`}
            subtitle="Institute average"
            icon={<TrendingUp />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Revenue"
            value={`₹${analytics.monthlyRevenue || 0}`}
            subtitle="This month"
            icon={<Payment />}
            color="warning"
          />
        </Grid>

        {/* System Status */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                System Status
              </Typography>
              <DataTable
                rows={systemStatusData}
                columns={systemStatusColumns}
                pageSize={5}
                checkboxSelection={false}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">
                  Recent Users
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate('/users')}
                >
                  View All
                </Button>
              </Box>
              <List>
                {recentUsers.length === 0 ? (
                  <ListItem>
                    <ListItemText
                      primary="No users found"
                      secondary="Start by adding users to your institute"
                    />
                  </ListItem>
                ) : (
                  recentUsers.map((user) => (
                  <ListItem
                    key={user.id}
                    sx={{
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': { borderBottom: 'none' },
                    }}
                  >
                    <ListItemIcon>
                      {user.isActive ? (
                        <CheckCircle color="success" />
                      ) : (
                        <Schedule color="disabled" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <Box>
                          <Typography variant="body2" color="textSecondary">
                            {user.email}
                          </Typography>
                          <Chip
                            label={user.role}
                            size="small"
                            variant="outlined"
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                  ))
                )}
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
                {quickActions.map((action, index) => (
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
                      onClick={() => navigate(action.path)}
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

const AdminDashboard: React.FC = () => {
  return (
    <ErrorBoundary>
      <AdminDashboardContent />
    </ErrorBoundary>
  );
};

export default AdminDashboard;
