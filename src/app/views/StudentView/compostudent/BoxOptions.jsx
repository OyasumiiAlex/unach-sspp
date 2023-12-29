//BoxOptions componente (Componente del formSquare para seleccionar opciones)
import { Autocomplete, styled, TextField } from '@mui/material';
//import { createFilterOptions } from '@mui/material/Autocomplete';
import React, { Fragment } from 'react';

const AutoComplete = styled(Autocomplete)(() => ({
  width: 425,
  marginBottom: '16px',
}));

const BoxOptions = (props) => {
  const { options, label } = props;
  return (
    <Fragment>
      <AutoComplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" fullWidth />
        )}
      />
    </Fragment>
  );
};

export default BoxOptions;