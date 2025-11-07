import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface SettingsForm {
  siteName: string;
  adminEmail: string;
  supportEmail: string;
  maxStudentsPerInstitute: string;
  maxTeachersPerInstitute: string;
}

export function Settings() {
  // TODO: Replace with real data and form handling
  const settings: SettingsForm = {
    siteName: 'Eduable',
    adminEmail: 'admin@eduable.com',
    supportEmail: 'support@eduable.com',
    maxStudentsPerInstitute: '500',
    maxTeachersPerInstitute: '50',
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement settings update
    console.log('Settings updated');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                General Settings
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Site Name"
                    name="siteName"
                    defaultValue={settings.siteName}
                  />
                  <TextField
                    fullWidth
                    label="Admin Email"
                    name="adminEmail"
                    type="email"
                    defaultValue={settings.adminEmail}
                  />
                  <TextField
                    fullWidth
                    label="Support Email"
                    name="supportEmail"
                    type="email"
                    defaultValue={settings.supportEmail}
                  />
                  <TextField
                    fullWidth
                    label="Max Students per Institute"
                    name="maxStudentsPerInstitute"
                    type="number"
                    defaultValue={settings.maxStudentsPerInstitute}
                  />
                  <TextField
                    fullWidth
                    label="Max Teachers per Institute"
                    name="maxTeachersPerInstitute"
                    type="number"
                    defaultValue={settings.maxTeachersPerInstitute}
                  />
                  <Box>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary"
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}