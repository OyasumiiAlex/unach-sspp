//View about create a file recepcion
import { styled } from '@mui/material';
import TableStudentPdf from './compoadmin/TableStudentPdf';
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



const Create = () => {

    return (
        <Container>
            <SimpleCard>
                <Title>Lista de alumnos que finalizaron su formulario</Title>
                <TableStudentPdf />
            </SimpleCard>
        </Container>
    );
};

export default Create;