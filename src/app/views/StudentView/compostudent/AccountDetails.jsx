import { useCallback, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Unstable_Grid2 as Grid,
  Divider
} from '@mui/material';

export const AccountDetails = () => {
  const [values] = useState({
    firstName: 'Nombre del alumno',
    lastName: 'Apellidos del alumno',
    email: 'B181015@unach.mx',
    id: 'B181015',
    semester: '5',
    group: 'D',
    career: 'Ingeniería en desarrollo y tecnologias de software',
    enterprise: 'Empresa',
    program: 'Servicio Social',
    state: 'Mondovi',
    number: '+52 962 123 45 67',
    country: 'FR'
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader={<Typography variant="subtitle1">Información Detallada</Typography>} />
        <Divider />
        <CardContent sx={{ pt: 2, height: 330, mb: 2 }}>
          <Box sx={{ m: 2 }}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6}>
                <Typography variant="body2" gutterBottom fullWidth>
                  Nombre: {values.firstName}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Apellidos: {values.lastName}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Correo: {values.email}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Matricula: {values.id}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Semestre: {values.semester}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Grupo: {values.group}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Empresa: {values.enterprise}
                  <Divider />
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography variant="body1" gutterBottom fullWidth>
                  Programa: {values.program}
                  <Divider />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </form >
  );
};
export default AccountDetails;