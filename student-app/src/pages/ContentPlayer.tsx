import React from 'react';
import { Box, Typography } from '@mui/material';

const ContentPlayer: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4">Content Player</Typography>
      <Typography variant="body1">Course content will be played here.</Typography>
    </Box>
  );
};

export default ContentPlayer;