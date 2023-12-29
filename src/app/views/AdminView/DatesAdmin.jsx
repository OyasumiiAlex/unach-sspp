//View Dates (Es la version administrador de la vista Home para los alumnos)
import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import SimpleCard from "app/components/cshared/SimpleCard";
import { useState } from "react";
//
const StyledTable = styled(Table)(() => ({
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "upperlowercase" } },
    },
}));

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const datesList = [
    {
        date1: 'A partir de 3 al 3 marzo del 2023',
    },
    {
        date2: 'A partir de 3 abril del 2023',

    },
    {
        date3: '10 de mayo fecha de cierre y prorroga',

    },
    {
        date4: '10 de mayo fecha de cierre y prorroga',
    },
];

const DatesAdmin = () => {
    const [page] = useState(0);
    const [rowsPerPage] = useState(5);

    return (
        <Container>
            <SimpleCard>
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                        </TableHead>
                        <TableBody>
                            {datesList
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((datesmap, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">Fecha de apertura {datesmap.date1}</TableCell>
                                        <TableCell align="center">Fecha de recepecion {datesmap.date2}</TableCell>
                                        <TableCell align="center">Fecha de cierre {datesmap.date3}</TableCell>
                                        <TableCell align="center">Entregas {datesmap.date4}</TableCell>
                                        <TableCell align="center">
                                            <IconButton>
                                                <Icon color="primary">edit</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </StyledTable>
                </Box >
            </SimpleCard>
        </Container>
    );
};

export default DatesAdmin;