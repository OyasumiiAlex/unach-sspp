import {
    Avatar,
    Box,
    Card,
    CardContent,
    Typography,
  } from '@mui/material';
  
  const user = {
    avatar: '/assets/images/profiles/2.jpg',
    jobTitle: 'Estudiante',
    name: 'Alumno JS',
    id: 'B181015',
  };
  
  export const AccountProfile = () => (
    <Card>
      <CardContent>
        <Box
          sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <Avatar src={user.avatar} sx={{ height: 120, mb: 2, width: 120 }} />
          <Typography gutterBottom variant="h6">
            {user.name}
          </Typography>
          <Typography color="text.secondary" variant="subtitle1">
            {user.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
  export default AccountProfile;