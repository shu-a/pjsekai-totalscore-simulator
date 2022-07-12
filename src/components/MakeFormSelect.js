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
  const formSelect = [];
  formSelect.push(
    <FormControl
      variant="standard"
      sx={props.sx}
      key={props.id}
      disabled={props.disabled}
    >
      <InputLabel id={props.id}>{props.inputLabel}</InputLabel>
      <Select
        label={props.label}
        labelId={props.id}
        id={props.id}
        value={props.value}
        onChange={props.handler}
        name={props.id}
      >
        {props.selectList}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
  return (
    <Fragment>
      {formSelect}
    </Fragment>
  );
}