import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

interface Student {
  id: number;
  name: string;
  email: string;
  institute: string;
  courses: string[];
  enrollmentDate: string;
}

export function Students() {
  // TODO: Replace with real data from API
  const students: Student[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      institute: 'Tech Academy',
      courses: ['Mathematics', 'Physics', 'Computer Science'],
      enrollmentDate: '2023-09-01',
    },
    {
      id: 2,
      name: 'Bob Wilson',
      email: 'bob.w@example.com',
      institute: 'Future Institute',
      courses: ['Biology', 'Chemistry'],
      enrollmentDate: '2023-08-15',
    },
    {
      id: 3,
      name: 'Carol Smith',
      email: 'carol.s@example.com',
      institute: 'Creative Learning Center',
      courses: ['Literature', 'History', 'Art'],
      enrollmentDate: '2023-09-05',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Students
      </Typography>

      <Grid container spacing={3}>
        {students.map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student.id}>
            <Card>
              <CardContent>
                <Box display="flex" gap={2}>
                  <Avatar>{student.name[0]}</Avatar>
                  <Box flex={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">
                        {student.name}
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
                      {student.email}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body2">
                        Institute: {student.institute}
                      </Typography>
                      <Typography variant="body2">
                        Enrolled: {student.enrollmentDate}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="body2" gutterBottom>
                        Courses:
                      </Typography>
                      <Box display="flex" gap={1} flexWrap="wrap">
                        {student.courses.map((course) => (
                          <Chip key={course} label={course} size="small" />
                        ))}
                      </Box>
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