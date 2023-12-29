import {
    Box,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Select,
    MenuItem,
    IconButton,
    Icon
} from "@mui/material";
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
//Card from title inside the product table
const CardHeader = styled(Box)(() => ({
    display: 'flex',
    paddingLeft: '720px',
    paddingRight: '24px',
    marginBottom: '12px',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const AlumnosData = [
    {
        matricula: 'B181011',
        name: 'Javier Samuel',
        lastname: 'Garcia Peña',
        enterprise: 'Agroequipos',
        degree: 'Ing. desarrollo de software',
        semester: '8',
        group: 'D',
        validated: false,
    },
    {
        matricula: 'B181012',
        name: 'Ana Lulu',
        lastname: 'Lopez Herrera',
        enterprise: 'Coparmex',
        degree: 'Lic. en contaduría pública',
        semester: '6',
        group: 'A',
        validated: false,
    },
    {
        matricula: 'B181013',
        name: 'Enrique',
        lastname: 'Garcia Hernandez',
        enterprise: 'Aviacsa',
        degree: 'Ing. desarrollo de software',
        semester: '7',
        group: 'E',
    },
    {
        matricula: 'B181014',
        name: 'Alejandro',
        lastname: 'de leon cruz',
        enterprise: 'Coparmex',
        degree: 'Lic. en contaduría pública',
        semester: '6',
        group: 'A',
    },
    {
        matricula: 'B181014',
        name: 'Enrique',
        lastname: 'Mendoza Peña',
        enterprise: 'Unach',
        degree: 'Lic. en contaduría pública',
        semester: '7',
        group: 'E',
    },

];

const TableStudentPdf = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <CardHeader>
                        <Select size="small" defaultValue="this_month">
                            <MenuItem value="this_month">Ing. de Software</MenuItem>
                            <MenuItem value="last_month">Contaduria Publica</MenuItem>
                        </Select>
                    </CardHeader>
                    <TableRow>
                        <TableCell align="center">Matricula</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Apellidos</TableCell>
                        <TableCell align="center">Licenciatura</TableCell>
                        <TableCell align="center">Semestre</TableCell>
                        <TableCell align="center">Grupo</TableCell>
                        <TableCell align="center">Ver PDF</TableCell>
                        <TableCell align="center">Editar</TableCell>
                        <TableCell align="center">Descargar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {AlumnosData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((alumndata, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{alumndata.matricula}</TableCell>
                                <TableCell align="center">{alumndata.name}</TableCell>
                                <TableCell align="center">{alumndata.lastname}</TableCell>
                                <TableCell align="center">{alumndata.degree}</TableCell>
                                <TableCell align="center">{alumndata.semester}</TableCell>
                                <TableCell align="center">{alumndata.group}</TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <Icon align='center' color="primary">remove_red_eye</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <Icon align='center' color="primary">edit</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <Icon align='center' color="primary">file_download</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 2 }}
                page={page}
                component="div"
                rowsPerPage={rowsPerPage}
                count={AlumnosData.length}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ "aria-label": "Sig, página" }}
                backIconButtonProps={{ "aria-label": "Ante. página" }}
            />
        </Box >
    );
};

export default TableStudentPdf;