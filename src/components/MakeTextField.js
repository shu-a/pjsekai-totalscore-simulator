import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';

export default function MakeTextField(props) {
  /* 옵션
  id
  label
  defaultValue
  type
  sx
  inputProps
  */
  const textField = [];
  textField.push(
    <TextField
      id={props.id}
      key={props.id}
      label={props.label}
      value = {props.value}
      onChange={props.handler}
      variant="standard"
      type={props.type}
      sx={props.sx}
      name={props.id}
      inputProps={props.inputProps}
    />
  );
  return (
    <Fragment>
      {textField}
    </Fragment>
  );
}