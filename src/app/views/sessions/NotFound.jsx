
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img src= "/assets/images/illustrations/notfoundnegocios.svg" alt="404" style={{ width: '100%', maxWidth: '500px' }} />
      <Typography align="center" variant="h4" mb={3}>
        Opps!!!
      </Typography>
      <Typography align="center" variant="h5" mb={3}>
        La página que estás buscando no pudo ser encontrada...
      </Typography>
      <Button color="primary" variant="contained" component={Link} to="/" disableElevation>
        Volver a Inicio
      </Button>
    </Container>
  </Box>
);

export default NotFound;

/* 404 alternativo
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 500,
  flexDirection: 'column',
  justifyContent: 'center',
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}));

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src="/assets/images/illustrations/notfoundnegocios.svg" alt="" />

        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  );
};

export default NotFound;
*/