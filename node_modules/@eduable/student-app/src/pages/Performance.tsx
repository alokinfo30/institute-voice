import React from 'react';
import { Box, Typography } from '@mui/material';

const Performance: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4">Performance</Typography>
      <Typography variant="body1">Your performance metrics will appear here.</Typography>
    </Box>
  );
};

export default Performance;