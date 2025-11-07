import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="70vh"
      gap={2}
    >
      <Typography variant="h1" color="text.secondary">
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center" maxWidth={400} marginBottom={3}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/dashboard')}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
}