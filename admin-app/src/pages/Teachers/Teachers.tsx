import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

interface Teacher {
  id: number;
  name: string;
  email: string;
  subject: string;
  institute: string;
  students: number;
}

export function Teachers() {
  // TODO: Replace with real data from API
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      email: 'jane.smith@example.com',
      subject: 'Mathematics',
      institute: 'Tech Academy',
      students: 120,
    },
    {
      id: 2,
      name: 'Prof. John Davis',
      email: 'john.davis@example.com',
      subject: 'Physics',
      institute: 'Future Institute',
      students: 85,
    },
    {
      id: 3,
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@example.com',
      subject: 'Computer Science',
      institute: 'Tech Academy',
      students: 150,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Teachers
      </Typography>

      <Grid container spacing={3}>
        {teachers.map((teacher) => (
          <Grid item xs={12} sm={6} md={4} key={teacher.id}>
            <Card>
              <CardContent>
                <Box display="flex" gap={2}>
                  <Avatar>{teacher.name[0]}</Avatar>
                  <Box flex={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">
                        {teacher.name}
                      </Typography>
                      <Box>
                        <IconButton size="small" aria-label="edit">
                          <Edit />
                        </IconButton>
                        <IconButton size="small" aria-label="delete">
                          <Delete />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {teacher.email}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body2">
                        Subject: {teacher.subject}
                      </Typography>
                      <Typography variant="body2">
                        Institute: {teacher.institute}
                      </Typography>
                      <Typography variant="body2">
                        Students: {teacher.students}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}