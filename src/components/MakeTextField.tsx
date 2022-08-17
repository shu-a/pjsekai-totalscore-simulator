import React, { Fragment } from 'react';
import { InfMakeProps } from '../common/common';
import TextField from '@mui/material/TextField';

interface InfProps extends InfMakeProps {
  label: string
  value: string | number
  handler: any
  type: string
  inputProps: any
}
export default function MakeTextField(props: InfProps) {
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