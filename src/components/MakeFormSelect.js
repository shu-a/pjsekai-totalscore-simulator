import React, { Fragment } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function MakeFormSelect(props) {
  /* 옵션
  sx
  id
  inputLabel
  label
  value
  handler
  helperText
  selectList
  */
  return (
    <Fragment>
      <FormControl
        variant="standard"
        key={props.id}
        sx={props.sx}
      >
        <InputLabel>{props.inputLabel}</InputLabel>
        <Select
          label={props.label}
          labelId={props.id}
          value={props.value}
          onChange={props.handler}
          name={props.id}
          inputProps={{
            id: props.id,
            readOnly: props.readonly
          }}
          sx={props.selectSx}
        >
          {props.selectList}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </Fragment>
  );
}