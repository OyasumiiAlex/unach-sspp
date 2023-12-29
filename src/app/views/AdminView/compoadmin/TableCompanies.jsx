import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { useState } from "react";
//
const StyledTable = styled(Table)(() => ({
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));

const companiesList = [
    {
        name: "Juanita",
        lastname: "Gomez Rodriguez",
        address: "Calle Esperanza #45 Col. Vista Hermosa",
        status: "Activo",
        company: "ABC Corp",
    },

    {
        name: "Carlos",
        lastname: "Gutierrez Vargas",
        address: "Av. Destino #56 Mz2 Fracc. Desconocida",
        status: "En proceso",
        company: "XYZ Corp"
    },

    {
        name: "Ana Maria",
        lastname: "Perez Soto",
        address: "Calle Aleatoria #78 Fracc. Ocaso",
        status: "Activo",
        company: "123 Industries"
    },

    {
        name: "Miguel Angel",
        lastname: "Lopez Hernandez",
        address: "Av. Serendipia #12 Mz3 Fracc. Desconocida",
        status: "Terminado",
        company: "XYZ Corp"
    },

    {
        name: 'Laura jazmin',
        lastname: 'Martínez Peréz',
        address: 'Calle Fortuna #34 Col.Aurora',
        status: 'Activo',
        company: "Tech Solutions",
    },

    {
        name: "Sofia",
        lastname: "Martinez Juarez",
        address: "Calle Fortuna #34 Col. Aurora",
        status: "Activo",
        company: "ABC Corp"
    },

    {
        name: "Luis",
        lastname: "Ramirez Mendoza",
        address: "Av. Casualidad #90 Mz1 Fracc. Desconocida",
        status: "Inactivo",
        company: "XYZ Corp"
    },

    {
        name: "Laura",
        lastname: "Hernandez Diaz",
        address: "Calle Felicidad #67 Col. Esperanza",
        status: "Activo",
        company: "123 Industries"
    },

    {
        name: "Jorge",
        lastname: "Sanchez Ramirez",
        address: "Av. Alea #21 Mz4 Fracc. Desconocida",
        status: "Inactivo",
        company: "XYZ Corp"
    },

    {
        name: "Martha",
        lastname: "Torres Martinez",
        address: "Calle Azar #43 Col. Libertad",
        status: "Activo",
        company: "ABC Corp"
    },

    {

        name: "Roberto",
        lastname: "Garcia Castro",
        address: "Av. Casual #89 Mz5 Fracc. Desconocida",
        status: "Inactivo",
        company: "XYZ Corp"


    },
];

const TableCompanies = () => {
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
                    <TableRow>
                        <TableCell align="center">Empresa</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Apellidos</TableCell>
                        <TableCell align="center">Dirección</TableCell>
                        <TableCell align="center">Estatus</TableCell>
                        <TableCell align="center">Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companiesList
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((compdata, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{compdata.company}</TableCell>
                                <TableCell align="center">{compdata.name}</TableCell>
                                <TableCell align="center">{compdata.lastname}</TableCell>
                                <TableCell align="center">{compdata.address}</TableCell>
                                <TableCell align="center">{compdata.status}</TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
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
                count={companiesList.length}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ "aria-label": "Next Page" }}
                backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
        </Box >
    );
};

export default TableCompanies;
