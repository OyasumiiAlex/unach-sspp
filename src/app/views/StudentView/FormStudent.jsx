//View about the form to fill by the students
import { Stack } from '@mui/material';
import { styled } from '@mui/material';
import SimpleCard from 'app/components/cshared/SimpleCard';
import FormSquare from './compostudent/FormSquare';


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

const FormStudent = () => {
    return (
        <Container>
            <Stack spacing={3}>
                <SimpleCard title="Formulario para carta de presentación">
                    <FormSquare />
                </SimpleCard>
            </Stack>
        </Container>
    );
};

export default FormStudent;