//Vista DataStudet muestra los datos recopilados de la base de datos
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import AccountProfile from './compostudent/AccountProfile';
import AccountDetails from './compostudent/AccountDetails';


const DataStudent = () => (
  <>
    <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <div>
            <Typography variant="h6">
              Perfil del alumno
            </Typography>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid xs={12} md={6} lg={4}>
                <AccountProfile />
              </Grid>
              <Grid xs={12} md={6} lg={8}>
                <AccountDetails />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

export default DataStudent;