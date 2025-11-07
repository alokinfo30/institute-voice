import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,  
  Link,
  Container,
} from '@mui/material';
import { School } from '@mui/icons-material';
import { useAuth } from '@eduable/shared-components';
import { useNavigate } from 'react-router-dom';
import { FormValidators } from '@eduable/shared-utils';
import Alert from '@mui/material/Alert';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const validation = FormValidators.validateForm(
      { email, password },
      {
        email: (value: string) => FormValidators.validateEmail(value),
        password: (value: string) => FormValidators.validateRequired(value, 'Password'),
      }
    );

    setErrors(validation.errors);
    return validation.isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 8,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 6,
            width: '100%',
            borderRadius: 3,
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <School
              sx={{
                fontSize: 48,
                color: 'primary.main',
                mb: 2,
              }}
            />
            <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
              Welcome to EduAble
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center">
              Sign in to your coaching institute platform
            </Typography>
          </Box>

          {authError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {authError}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isSubmitting}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Paper>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          © 2024 EduAble. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;