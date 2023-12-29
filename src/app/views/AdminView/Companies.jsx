//View about companies list
import { styled } from "@mui/material";
import SimpleCard from "app/components/cshared/SimpleCard"; 
import TableCompanies from "./compoadmin/TableCompanies";


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
    display: 'flex',
    marginBottom: '15px',
}));

const Companies = () => {
    return (
        <Container>
            <SimpleCard>
                <Title>Lista de empresas</Title>
                <TableCompanies />
            </SimpleCard>
        </Container>
    );
};

export default Companies;
