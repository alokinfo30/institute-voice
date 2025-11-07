import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Chip,
  LinearProgress,
  Grid,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  PlayArrow,
  CheckCircle,
  Lock,
  Schedule,
  TrendingUp,
  Lightbulb,
} from '@mui/icons-material';
import { PageHeader, LoadingSpinner } from '@eduable/shared-components';
import { apiClient } from '@eduable/shared-utils';
import { useQuery } from '@tanstack/react-query';

const LearningPath: React.FC = () => {
  const { data: learningPath, isLoading } = useQuery({
    queryKey: ['learning-path'],
    queryFn: () => apiClient.get('/ai/learning-path'),
  });

  const [activeStep, setActiveStep] = useState(0);

  if (isLoading) {
    return <LoadingSpinner message="Generating your personalized learning path..." />;
  }

  return (
    <Box>
      <PageHeader
        title="Your Learning Path"
        subtitle="AI-powered personalized journey to master your subjects"
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Learning Journey
              </Typography>
              
              <Stepper activeStep={activeStep} orientation="vertical">
                {learningPath?.steps?.map((step: any, index: number) => (
                  <Step key={step.id}>
                    <StepLabel
                      optional={
                        <Typography variant="caption">
                          {step.estimatedTime} • {step.difficulty}
                        </Typography>
                      }
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1" fontWeight="medium">
                          {step.title}
                        </Typography>
                        {step.status === 'completed' && (
                          <CheckCircle color="success" fontSize="small" />
                        )}
                        {step.status === 'current' && (
                          <PlayArrow color="primary" fontSize="small" />
                        )}
                        {step.status === 'locked' && (
                          <Lock color="disabled" fontSize="small" />
                        )}
                      </Box>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body2" color="textSecondary" paragraph>
                        {step.description}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" fontWeight="medium" gutterBottom>
                          Progress
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={step.progress}
                          sx={{ height: 8, borderRadius: 4, mb: 1 }}
                        />
                        <Typography variant="caption" color="textSecondary">
                          {step.progress}% complete
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {step.topics?.map((topic: string) => (
                          <Chip
                            key={topic}
                            label={topic}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleStartStep(step)}
                          disabled={step.status === 'locked'}
                        >
                          {step.status === 'completed' ? 'Review' : 'Start'}
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handlePreviewStep(step)}
                        >
                          Preview
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Progress Overview */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Path Overview
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <TrendingUp />
                </Avatar>
                <Box>
                  <Typography variant="body2" fontWeight="medium">
                    Overall Progress
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {learningPath?.overallProgress || 0}%
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Completed Steps
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {learningPath?.completedSteps || 0}/{learningPath?.totalSteps || 0}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Time Spent
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {Math.round((learningPath?.totalTimeSpent || 0) / 60)}h
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="textSecondary">
                  Estimated Completion
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  {learningPath?.estimatedCompletion}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                AI Suggestions
              </Typography>
              
              {learningPath?.recommendations?.map((rec: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    py: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Avatar sx={{ bgcolor: 'warning.light', width: 32, height: 32 }}>
                    <Lightbulb fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight="medium">
                      {rec.title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {rec.description}
                    </Typography>
                    <Button
                      size="small"
                      sx={{ mt: 0.5 }}
                      onClick={() => handleApplySuggestion(rec)}
                    >
                      Apply
                    </Button>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const handleStartStep = (step: any) => {
  // Navigate to step content
  console.log('Starting step:', step);
};

const handlePreviewStep = (step: any) => {
  // Show step preview
  console.log('Previewing step:', step);
};

const handleApplySuggestion = (suggestion: any) => {
  // Apply AI suggestion
  console.log('Applying suggestion:', suggestion);
};

export default LearningPath;