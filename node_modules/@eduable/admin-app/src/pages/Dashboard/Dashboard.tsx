import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import People from '@mui/icons-material/People';
import School from '@mui/icons-material/School';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Assignment from '@mui/icons-material/Assignment';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <Paper sx={{ p: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="h6" component="div">
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export function Dashboard() {
  // TODO: Replace with real data from API
  const stats = [
    { title: 'Total Students', value: '1,234', icon: <People fontSize="large" /> },
    { title: 'Total Teachers', value: '89', icon: <PersonOutline fontSize="large" /> },
    { title: 'Active Institutes', value: '12', icon: <School fontSize="large" /> },
    { title: 'Active Courses', value: '45', icon: <Assignment fontSize="large" /> },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
      
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Recent Activity
        </Typography>
        <Paper sx={{ p: 2, minHeight: 200 }}>
          <Typography color="text.secondary">
            Coming soon: Activity feed and analytics
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}