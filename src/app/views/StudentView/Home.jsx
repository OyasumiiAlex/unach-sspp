//View Home: This view show dates about the events
import {
    Box,
    Container,
    Stack,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Unstable_Grid2 as Grid,
    Divider
} from '@mui/material';

export const Home = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
            <Container maxWidth="xl" sx={{ width: 2000 }}>
                <Stack spacing={2}>
                    <div>
                        <Typography variant="h6">
                            Perfil del alumno unach
                        </Typography>
                    </div>
                    <Grid container spacing={1}>
                        <Grid xs={12} md={6} lg={4}>
                            <Card>
                                <CardHeader subheader={<Typography variant="subtitle1">Información Detallada</Typography>} />
                                <Divider />
                                <CardContent sx={{ pt: 2, height: 300, mb: 2 }}>
                                    <Box sx={{ m: 2 }}>
                                        <Grid container spacing={2}>
                                            <Grid xs={12} md={6}>
                                                <Typography variant="h6" sx={{ color: (theme) => theme.palette.success.main }}>
                                                    Fecha de apertura
                                                </Typography>
                                                <Typography variant="body2" gutterBottom fullWidth>
                                                    A partir de 3 al 3 marzo del 2023
                                                    <Divider />
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12} md={6}>
                                                <Typography variant="h6" sx={{ color: (theme) => theme.palette.info.main }}>
                                                    Fecha de recepecion
                                                </Typography>
                                                <Typography variant="body1" gutterBottom fullWidth>
                                                    A partir de 3 abril del 2023
                                                    <Divider />
                                                </Typography>
                                            </Grid>
                                            <Grid xs={12} md={6}>
                                                <Typography variant="h6" sx={{ color: (theme) => theme.palette.warning.main }}>
                                                    Fecha de cierre
                                                </Typography>
                                                <Typography variant="body1" gutterBottom fullWidth>
                                                    10 de mayo fecha de cierre y prorroga
                                                    <Divider />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box >
    );
};
export default Home;