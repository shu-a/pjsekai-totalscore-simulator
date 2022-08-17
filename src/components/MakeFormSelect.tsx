import React, { Fragment } from 'react';
import { InfMakeProps } from '../common/common';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

interface InfProps extends InfMakeProps {
  inputLabel: string
  label: string
  value: string | number
  handler: any
  readonly: boolean
  selectSx: any
  selectList: any
  helperText: string
}
export default function MakeFormSelect(props: InfProps) {
  let propsId = String(props.id);
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
          labelId={propsId}
          value={props.value}
          onChange={props.handler}
          name={propsId}
          inputProps={{
            id: propsId,
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