import React, { useState, useEffect } from 'react';
import { flexbox } from '@mui/system';
import { getTeamList, getAttrList } from '../../../apis/apiClient'
import MakeCard from '../../../components/MakeCard';
import MakeTextField from '../../../components/MakeTextField';
import localforage from 'localforage';

function switchiId(props) {
  switch (props) {
    case 'team':
      return 'teamArea_';
    case 'attr':
      return 'attrArea_';
    default:
      return '';
  }
}

function switchTitle(props) {
  switch (props) {
    case 'team':
      return '팀 에어리어';
    case 'attr':
      return '속성 에어리어';
    default:
      return '';
  }
}

export default function AttrTeamArea(props) {
  const [attrTeamAreaList, setAttrTeamAreaList] = useState([]);
  const [formValue, setFormValue] = useState({});
  const type = switchiId(props.type);
  useEffect(() => {
    localforage.getItem('team').then((value) => {
      if (value)
        setFormValue(value);
    });
    if (props.type === 'attr')
      setAttrTeamAreaList(getAttrList());
    else if (props.type === 'team')
      getTeamList().then((resData) => setAttrTeamAreaList(resData));
  }, [props.type]);
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem('team', formValue);
  }, [formValue]);
  const textField = attrTeamAreaList.map((c) => {
    let value = '';
    let id = type + c.unit;
    if (formValue[id])
      value = formValue[id];
    return <MakeTextField key={type + c.unit} id={type + c.unit} label={c.unitName} value={value} handler={handleChangeText}
      type={"number"} sx={{ width: 256, margin: 1 }} inputProps={{ step: 0.1 }} />

  }
  );

  return (
    <MakeCard
      sx={{
        minWidth: 300,
        maxWidth: 765,
        paddingBottom: 2,
        margin: 0.5,
        marginTop: 1,
        display: flexbox
      }}
      id="teamCard"
      key="teamCard"
      title={switchTitle(props.type)}
      content={textField}
    />
  );
}