//Componente que forma parte de la vista FormStudent
import { Span, H6 } from "app/components/typography/Typography";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
    Button,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    styled,
} from "@mui/material";
import BoxOptions from "./BoxOptions";


/*---------Declaracion de Constantes------------*/
const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

const FormSquare = () => {
    const [state, setState] = useState({ date: new Date() });

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    //BoxOptions const
    const programopc = [
        { label: 'Practicas Profesionales' },
        { label: 'Servicio Social' },
        { label: 'Residencia profesional' }
    ];

    const degrees = [
        { label: 'Lic. en Contaduria Pública' },
        { label: 'Ing. en Desarrollo y Tecnologias de software' },
    ];

    /*Textfield Const*/
    const {
        enterprisename,
        holdername,
        holderlastname,
        direction,
        gender,
        studentname,
        studentlastname,
        grade,
        group,
    } = state;
    return (
        //Form TextFields
        <div>
            <H6>Datos de la empresa</H6>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="enterprisename"
                            id="standard-basic"
                            value={enterprisename || ""}
                            onChange={handleChange}
                            errorMessages={["Campo obligatorio"]}
                            label="Nombre de la empresa u institución"
                            validators={["required", "minStringLength: 5", "maxStringLength: 20"]}
                        />
                        <TextField
                            type="text"
                            name="direction"
                            value={direction || ""}
                            label="Direccion de la empresa u institución"
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["Campo obligatorio"]}
                        />

                        <TextField
                            type="text"
                            name="holdername"
                            label="Nombre del responsable"
                            onChange={handleChange}
                            value={holdername || ""}
                            validators={["required"]}
                            errorMessages={["Campo obligatorio"]}
                        />
                        <TextField
                            type="text"
                            name="holderlastname"
                            label="Apellidos"
                            onChange={handleChange}
                            value={holderlastname || ""}
                            validators={["required"]}
                            errorMessages={["Campo obligatorio"]}
                        />
                        {/*Radio Options gender*/}
                        <RadioGroup
                            row
                            name="gender"
                            sx={{ mb: 2 }}
                            value={gender || ""}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="Male"
                                label="Masculino"
                                labelPlacement="end"
                                control={<Radio color="secondary" />}
                            />

                            <FormControlLabel
                                value="Female"
                                label="Femenino"
                                labelPlacement="end"
                                control={<Radio color="secondary" />}
                            />
                        </RadioGroup>
                    </Grid>
                    {/*------------Division---------*/}
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="studentname"
                            id="standard-basic"
                            value={studentname || ""}
                            onChange={handleChange}
                            errorMessages={["Campo obligatorio"]}
                            label="Nombre del alumno"
                            validators={["required"]}
                        />
                        <TextField
                            type="text"
                            name="studentlastname"
                            id="standard-basic"
                            value={studentlastname || ""}
                            onChange={handleChange}
                            errorMessages={["Campo obligatorio"]}
                            label="Apellidos"
                            validators={["required"]}
                        />
                        {/*Grado y grupo en una sola fila*/}
                        <Grid container spacing={2} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                            <Grid item>
                                <TextField
                                    type="text"
                                    name="grade"
                                    id="standard-basic"
                                    value={grade >= 1 ? grade : ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (!isNaN(value) && value >= 0) {
                                            handleChange(e);
                                        }
                                    }}
                                    inputProps={{ inputMode: "numeric" }}
                                    errorMessages={["Campo obligatorio"]}
                                    label="Grado"
                                    validators={["required", "minStringLength: 1", "maxStringLength: 1"]}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type="text"
                                    name="group"
                                    id="standard-basic"
                                    value={group || ""}
                                    onChange={handleChange}
                                    errorMessages={["Campo obligatorio"]}
                                    label="Grupo"
                                    validators={["required", "minStringLength: 1", "maxStringLength: 1"]}
                                    inputProps={{ pattern: "^[a-zA-Z]*$", title: "No números ni caracteres especiales" }}
                                />
                            </Grid>
                        </Grid>
                        {/*------------------------*/}
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 0 }}>
                            {/*Falta añadir errorMessage en BoxOptions */}
                            <BoxOptions
                                label="Licenciatura"
                                options={degrees}
                                errorMessages={["Campo obligatorio"]}
                            />
                            <BoxOptions
                                label="Indique el programa"
                                options={programopc}
                                errorMessages={["Campo obligatorio"]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/**-------------Button-------------*/}
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Enviar</Span>
                </Button>
            </ValidatorForm>
        </div >
    );
};

export default FormSquare;
