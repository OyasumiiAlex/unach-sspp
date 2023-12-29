//View ConsultaAdmin (Muestra la lista de alumnos de la base de datos)
import { styled } from '@mui/material';
import TableStudent from './compoadmin/TableStudent';
import SimpleCard from 'app/components/cshared/SimpleCard';


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

//Style from title
const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'lowecase',
  display: 'flex'
}));

const ConsultAdmin = () => {

  return (
    <Container>
      <SimpleCard>
        <Title>Lista de alumnos</Title>
        <TableStudent />
      </SimpleCard>
    </Container>
  );
};

export default ConsultAdmin;