import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';

export default function MakeTextField(props) {
  /* 옵션
  id
  label
  defaultValue
  type
  sx
  */
  const textField = [];
  textField.push(
    <TextField
      id={props.id}
      key={props.id}
      label={props.label}
      defaultValue=""
      variant="standard"
      type={props.type}
      sx={props.sx}
      name={props.id}
    />
  );
  return (
    <Fragment>
      {textField}
    </Fragment>
  );
}