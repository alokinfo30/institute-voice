import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { getMe, getCourses } from '../api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem('access_token') || undefined;
        const me = await getMe(token);
        setUser(me);
      } catch (err) {
        setError('Unable to load user');
      }
      try {
        const cs = await getCourses();
        setCourses(cs);
      } catch (err) {
        setError('Unable to load courses');
      }
    }
    load();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {user ? `Welcome back, ${user.name}` : 'Dashboard'}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Your Courses</Typography>
            <List>
              {courses.map((c) => (
                <ListItem key={c.id}>{c.title}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>

      {error && <Typography color="error">{error}</Typography>}    
    </Box>
  );
}
