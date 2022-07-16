import React, { useState, Fragment, useEffect } from 'react';
import MakeMemberCard from '../../components/MakeMemberCard';
import MenuItem from '@mui/material/MenuItem';
import MakeFormSelect from '../../components/MakeFormSelect';
import MakeTextField from '../../components/MakeTextField';
import localforage from 'localforage';

export default function CardContents(props) {
  const [disabled, setDisabled] = useState(true);
  const changeDisabled = (team) => {
    if (team) {
      setDisabled(false);
      setHelperText('');
    }
    else {
      setDisabled(true);
      setHelperText(defaultHelperText);
    }
  }
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    localforage.getItem('cards').then((value) => {
      if (value)
        setFormValue(value);
    });
  }, []);
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem('cards', formValue);
  }, [formValue]);

  const [attr, setAttr] = useState('');
  const [team, setTeam] = useState('');
  const [subUnit, setSubUnit] = useState('');
  const [character, setCharacter] = useState('');
  const [rarities, setRarities] = useState('');
  const handleSelectAttr = (e) => {
    setAttr(e.target.value);
  }
  const handleSelectTeam = (e) => {
    setTeam(e.target.value);
    setCharacter('');
  }
  const handleSelectSubUnit = (e) => {
    setSubUnit(e.target.value);
  }
  const handleSelectRarities = (e) => {
    setRarities(e.target.value);
  }
  const handleSelectCharacter = (e) => {
    setCharacter(e.target.value);
  }

  const [charactList, setCharacterList] = useState([]);
  useEffect(() => {
    changeDisabled(team);
    if (team === 'piapro')
      setSubUnit('');
    else
      setSubUnit(team);
    setCharacterList(props.characterList.map((c) => {
      if (team === (c.unit))
        return <MenuItem key={c.id} value={c.id}>{c.fullName}</MenuItem>;
      else
        return false;
    }));
  }, [team, props.characterList]);

  const teamList = props.teamList.map((c) =>
    <MenuItem key={c.seq} value={c.unit} unit={c.unit}>{c.unitName}</MenuItem>
  );
  const attrList = props.attrList.map((c) =>
    <MenuItem key={c.unit} value={c.unit}>{c.unitName}</MenuItem>
  );
  const subUnitList = props.teamList.map((c) => {
    if (Number(c.seq) !== 1)
      return <MenuItem key={c.unit} value={c.unit}>{c.unitName}</MenuItem>
    else
      return false
  });
  const raritiesList = props.raritiesList.map((c) =>
    <MenuItem key={c.seq} value={c.seq} >{c.cardRarityType.split('_')[1]}</MenuItem>
  );
  
  const makeFormSelect = [];
  const defaultHelperText = '팀을 선택하세요';
  const [helperText, setHelperText] = useState(defaultHelperText);
  const makeFormSelectContents = [
    { sx: { m: 1, width: 256 }, id: 'attr', label: '속성', value: attr, handler: handleSelectAttr, selectList: attrList },
    { sx: { m: 1, width: 120 }, id: 'team', label: '팀', value: team, handler: handleSelectTeam, selectList: teamList },
    { sx: { m: 1, width: 120 }, id: 'subUnit', label: '서브유닛', value: subUnit, handler: handleSelectSubUnit, selectList: teamList, disabled: disabled, helperText: helperText },
    { sx: { m: 1, width: 120 }, id: 'rarities', label: '성급', value: rarities, handler: handleSelectRarities, selectList: raritiesList },
    { sx: { m: 1, width: 120 }, id: 'character', label: '캐릭터명', value: character, handler: handleSelectCharacter, selectList: charactList, disabled: disabled, helperText: helperText }
  ];
  const makeFormSelectlist = makeFormSelectContents.map((c) =>
    <MakeFormSelect key={c.id} id={props.title + '_' + c.id} sx={c.sx} label={c.label} inputLabel={c.label} value={c.value} handler={c.handler}
      selectList={c.selectList} disabled={c.disabled} helperText={c.helperText} />
  );
  makeFormSelect.push(makeFormSelectlist);

  const makeTextFieldContents = [
    { id: 'performance', label: 'Performance', type: 'number', sx: { width: 256, marginTop: 1 } },
    { id: 'technique', label: 'Technique', type: 'number', sx: { width: 256, marginTop: 1 } },
    { id: 'stamina', label: 'Stamina', type: 'number', sx: { width: 256, marginTop: 1 } }
  ];
  const makeTextFieldList = makeTextFieldContents.map((c) => {
    let value = '';
    let id = props.title + "_" + c.id;
    if (formValue[id])
      value = formValue[id];
    return <MakeTextField key={c.id} id={props.title + "_" + c.id} label={c.label} type={c.type} sx={c.sx} value={value} handler={handleChangeText} />
  }
  );
  makeFormSelect.push(makeTextFieldList);

  const cardContents = <MakeMemberCard key="MakeMemberCard" makeFormSelect={makeFormSelect} title={props.title} border={props.border} color={props.color} />;
  return (
    <Fragment>
      {cardContents}
    </Fragment>
  );
}