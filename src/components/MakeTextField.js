import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';

export default function MakeTextField(props) {
  const textField = [];
  textField.push(
    <TextField
      id={props.id}
      key={props.id}
      required
      label={props.label}
      defaultValue=""
      variant="standard"
      type={props.type}
      sx={props.sx}
    />
  );
  return (
    <Fragment>
      {textField}
    </Fragment>
  );
}