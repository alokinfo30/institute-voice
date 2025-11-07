import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  LinearProgress,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search, School, PlayArrow, CheckCircle } from '@mui/icons-material';
import { PageHeader, LoadingSpinner, EmptyState } from '@eduable/shared-components';
import { apiClient } from '@eduable/shared-utils';
import { useQuery } from '@tanstack/react-query';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: courses, isLoading } = useQuery({
    queryKey: ['student-courses'],
    queryFn: () => apiClient.get('/courses/my-courses'),
  });

  const filteredCourses = courses?.filter((course: any) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (isLoading) {
    return <LoadingSpinner message="Loading your courses..." />;
  }

  return (
    <Box>
      <PageHeader
        title="My Courses"
        subtitle="Continue your learning journey across all enrolled courses"
        action={
          <TextField
            size="small"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 300 }}
          />
        }
      />

      {filteredCourses.length === 0 ? (
        <EmptyState
          icon={<School sx={{ fontSize: 64 }} />}
          title="No courses found"
          description={searchTerm ? "Try adjusting your search terms" : "You haven't enrolled in any courses yet"}
          action={
            searchTerm ? {
              label: 'Clear Search',
              onClick: () => setSearchTerm(''),
            } : {
              label: 'Browse Courses',
              onClick: () => window.location.href = '/catalog',
            }
          }
        />
      ) : (
        <Grid container spacing={3}>
          {filteredCourses.map((course: any) => (
            <Grid item xs={12} md={6} lg={4} key={course.id}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const CourseCard: React.FC<{ course: any }> = ({ course }) => {
  const progress = course.progress || 0;
  const isCompleted = progress === 100;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <School />
          </Box>
          <Chip
            label={isCompleted ? 'Completed' : 'In Progress'}
            color={isCompleted ? 'success' : 'primary'}
            size="small"
            variant={isCompleted ? 'filled' : 'outlined'}
          />
        </Box>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          {course.name}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2, flex: 1 }}>
          {course.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="textSecondary">
              Progress
            </Typography>
            <Typography variant="body2" fontWeight="medium">
              {progress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 8, borderRadius: 4 }}
            color={isCompleted ? 'success' : 'primary'}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="contained"
            startIcon={isCompleted ? <CheckCircle /> : <PlayArrow />}
            fullWidth
            onClick={() => window.location.href = `/courses/${course.id}`}
          >
            {isCompleted ? 'Review' : 'Continue'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Courses;