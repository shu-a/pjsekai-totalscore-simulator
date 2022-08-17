import React, { useState, useEffect } from 'react';
import { InfKeyValue } from '../../common/common';
import { getTeamList, getAttrList, InfAttrList } from '../../apis/apiClient'
import MakeCard from '../../components/MakeCard';
import MakeTextField from '../../components/MakeTextField';
import localforage from 'localforage';

function switchiId(props: string) {
  switch (props) {
    case 'team':
      return 'teamArea_';
    case 'attr':
      return 'attrArea_';
    default:
      return '';
  }
}

function switchTitle(props: string) {
  switch (props) {
    case 'team':
      return '팀 에어리어';
    case 'attr':
      return '속성 에어리어 / 칭호 보너스';
    default:
      return '';
  }
}

export default function AttrTeamArea(props: any) {
  const [attrTeamAreaList, setAttrTeamAreaList] = useState<InfAttrList[]>([]);
  const [formValue, setFormValue] = useState<InfKeyValue>({});
  const type = switchiId(props.type);
  useEffect(() => {
    localforage.getItem(type).then((value: any) => {
      if (value)
        setFormValue(value);
    });
    if (props.type === 'attr')
      setAttrTeamAreaList(getAttrList());
    else if (props.type === 'team')
      getTeamList().then((resData) => setAttrTeamAreaList(resData));// eslint-disable-next-line
  }, [props.type]);
  const handleChangeText = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem(type, formValue);// eslint-disable-next-line
  }, [formValue]);
  const textField = attrTeamAreaList.map((c) => {
    let value = '';
    let id = type + c.unit;
    if (formValue[id])
      value = String(formValue[id]);
    return <MakeTextField key={type + c.unit} id={type + c.unit} label={c.unitName} value={value} handler={handleChangeText}
      type={"number"} sx={{ width: 256, margin: 1 }} inputProps={{ step: 0.1 }} />
  });
  const handleClear = () => {
    for (let key in formValue) {
      delete formValue[key];
      setFormValue(formValue);
    }
  }

  if (props.type === 'attr')
    textField.push(<MakeTextField key="titleBonus" id="titleBonus" label="칭호 보너스" value={formValue['titleBonus'] ? formValue['titleBonus'] : ''}
    handler={handleChangeText} type={"number"} sx={{ width: 256, margin: 1 }} inputProps={{ step: 0.1 }} />);
  return (
    <MakeCard
      sx={{
        minWidth: 300,
        pb: 2,
        backgroundColor: '#fffff7',
        border: '2px solid #cceeef'
      }}
      id="teamCard"
      key="teamCard"
      title={switchTitle(props.type)}
      content={textField}
      clearHandler={handleClear}
      subheader=""
    />
  );
}