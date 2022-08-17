import React, { useState, useEffect } from 'react';
import { InfKeyValue } from '../../common/common';
import { getCharacterList } from '../../apis/apiClient';
import MakeCard from '../../components/MakeCard';
import MakeTextField from '../../components/MakeTextField';
import localforage from 'localforage';
import { InfCharacterArea } from '../Card/Index';

function switchiId(props: string) {
  switch (props) {
    case 'area':
      return 'characterArea_';
    case 'rank':
      return 'characterRank_';
    default:
      return '';
  }
}

function switchTitle(props: string) {
  switch (props) {
    case 'area':
      return '캐릭터 에어리어';
    case 'rank':
      return '캐릭터 랭크';
    default:
      return '';
  }
}
export default function CharacterArea(props: InfCharacterArea) {
  const [characterList, setCharacterList] = useState([]);
  const [formValue, setFormValue] = useState<InfKeyValue>({});
  const type = switchiId(props.type);
  useEffect(() => {
    localforage.getItem(type).then((value: any) => {
      if (value)
        setFormValue(value);
    });
    getCharacterList().then((resData: any) => setCharacterList(resData));// eslint-disable-next-line
  }, []);
  const handleChangeText = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem(type, formValue);// eslint-disable-next-line
  }, [formValue]);
  const textField = characterList.map((c: InfKeyValue) => {
    let value = '';
    let id = type + c.id;
    if (formValue[id])
      value = String(formValue[id]);
    return <MakeTextField key={type + c.id} id={type + c.id} label={String(c.fullName)} value={value} handler={handleChangeText}
      type={'number'} sx={{ width: 256, margin: 1 }} inputProps="" />
  });
  const handleClear = () => {
    for (let key in formValue) {
      // setFormValue(delete formValue[key]);
      delete formValue[key];
      setFormValue(formValue);
    }
  }

  return (
    <MakeCard
      sx={{
        minWidth: 300,
        pb: 2,
        backgroundColor: '#fffff7',
        border: '2px solid #cceeef'
      }}
      id="subUnitCard"
      key="subUnitCard"
      title={switchTitle(props.type)}
      content={textField}
      clearHandler={handleClear}
      subheader=""
    />
  );
}