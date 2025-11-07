import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

export function Institutes() {
  // TODO: Replace with real data from API
  const institutes = [
    { id: 1, name: 'Tech Academy', location: 'San Francisco, CA', students: 450, teachers: 32 },
    { id: 2, name: 'Creative Learning Center', location: 'New York, NY', students: 320, teachers: 25 },
    { id: 3, name: 'Future Institute', location: 'Boston, MA', students: 280, teachers: 20 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Institutes
      </Typography>

      <Grid container spacing={3}>
        {institutes.map((institute) => (
          <Grid item xs={12} md={6} lg={4} key={institute.id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {institute.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {institute.location}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body2">
                        Students: {institute.students}
                      </Typography>
                      <Typography variant="body2">
                        Teachers: {institute.teachers}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton size="small" aria-label="edit">
                      <Edit />
                    </IconButton>
                    <IconButton size="small" aria-label="delete">
                      <Delete />
                    </IconButton>
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