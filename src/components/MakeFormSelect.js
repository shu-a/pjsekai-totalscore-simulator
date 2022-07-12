import React, { Fragment } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function MakeFormSelect(props) {
  const formSelect = [];
  formSelect.push(
    <FormControl
      variant="standard"
      sx={props.sx}
      key={props.id}
    >
      <InputLabel id={props.id}>{props.inputLabel}</InputLabel>
      <Select
        labelId={props.id}
        id={props.id}
        key={props.id}
        value={props.value}
        onChange={props.handler}
        label="캐릭터 팀"
      >
        {props.selectList}
      </Select>
    </FormControl>
  );
  return (
    <Fragment>
      {formSelect}
    </Fragment>
  );
}