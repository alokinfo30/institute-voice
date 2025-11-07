import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography} from '@mui/material';
import { login } from '../api';
import Alert from '@mui/material/Alert';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await login(email, password);
      // store token in localStorage for this scaffold (in production use httpOnly cookies)
      localStorage.setItem('access_token', data.access_token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', p: 4 }} component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Sign in</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in'}
      </Button>
    </Box>
  );
}
