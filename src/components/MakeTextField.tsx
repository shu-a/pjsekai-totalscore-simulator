import React, { Fragment } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  sx: any
  id: string | number
  label: string
  value: string | number
  handler: any
  type: string
  inputProps: any
}
export default function MakeTextField(props: Props) {
  let propsId = String(props.id);
  /* 옵션
  id
  label
  defaultValue
  type
  sx
  inputProps
  */
  return (
    <Fragment>
      <TextField
        id={propsId}
        key={props.id}
        label={props.label}
        value={props.value}
        onChange={props.handler}
        variant="standard"
        type={props.type}
        sx={props.sx}
        name={propsId}
        inputProps={props.inputProps}
      />
    </Fragment>
  );
}