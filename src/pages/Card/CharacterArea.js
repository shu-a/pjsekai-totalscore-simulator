import React, { useState, useEffect } from 'react';
import { getCharacterList } from '../../apis/apiClient'
import MakeCard from '../../components/MakeCard';
import MakeTextField from '../../components/MakeTextField';
import localforage from 'localforage';

function switchiId(props) {
  switch (props) {
    case 'area':
      return 'characterArea_';
    case 'rank':
      return 'characterRank_';
    default:
      return '';
  }
}

function switchTitle(props) {
  switch (props) {
    case 'area':
      return '캐릭터 에어리어';
    case 'rank':
      return '캐릭터 랭크';
    default:
      return '';
  }
}

export default function CharacterArea(props) {
  console.log(props.type);
  const [characterList, setCharacterList] = useState([]);
  const [formValue, setFormValue] = useState({});
  const type = switchiId(props.type);
  useEffect(() => {
    localforage.getItem(type).then((value) => {
      if (value)
        setFormValue(value);
    });
    getCharacterList().then((resData) => setCharacterList(resData));
  }, []);
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    localforage.getItem(type).then((value) => {
      if (value)
        console.log(value);
    });
  }
  useEffect(() => {
    console.log(formValue);
    localforage.setItem(type, formValue);
  }, [formValue]);
  const textField = characterList.map((c) => {
    let value = '';
    let id = type + c.id;
    if (formValue[id])
      value = formValue[id];
    return <MakeTextField key={type + c.id} id={type + c.id} label={c.fullName} value={value} handler={handleChangeText}
      type={'number'} sx={{ width: 256, margin: 1 }} />
  });

  return (
    <MakeCard
      sx={{
        minWidth: 300,
        pb: 2
      }}
      id="subUnitCard"
      key="subUnitCard"
      title={switchTitle(props.type)}
      content={textField}
    />
  );
}