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
    localforage.getItem(props.title).then((value) => {
      const getAttr = props.title + '_attr';
      const getTeam = props.title + '_team';
      const getRarities = props.title + '_rarities';
      if (value) {
        setFormValue(value);
        setAttr(value[getAttr] ? value[getAttr] : '');
        setTeam(value[getTeam] ? value[getTeam] : '');
        setRarities(value[getRarities] ? value[getRarities] : '')
      }
    });
  }, []);
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem(props.title, formValue);
  }, [formValue]);

  const handleClear = () => {
    for (let key in formValue) {
      setFormValue(delete formValue[key]);
      setAttr('');
      setTeam('');
      setSubUnit('');
      setCharacter('');
      setRarities('');
    }
  }

  const [attr, setAttr] = useState('');
  const [team, setTeam] = useState('');
  const [subUnit, setSubUnit] = useState('');
  const [character, setCharacter] = useState('');
  const [rarities, setRarities] = useState('');
  const handleSelectAttr = (e) => {
    const { name, value } = e.target;
    setAttr(e.target.value);
    setFormValue({ ...formValue, [name]: value });
  }
  const handleSelectTeam = (e) => {
    const { name, value } = e.target;
    setTeam(e.target.value);
    setFormValue({ ...formValue, [name]: value });
  }
  const handleSelectSubUnit = (e) => {
    const { name, value } = e.target;
    setSubUnit(e.target.value);
    setFormValue({ ...formValue, [name]: value });
  }
  const handleSelectRarities = (e) => {
    const { name, value } = e.target;
    setRarities(e.target.value);
    setFormValue({ ...formValue, [name]: value });
  }
  const handleSelectCharacter = (e) => {
    const { name, value } = e.target;
    setCharacter(e.target.value);
    setFormValue({ ...formValue, [name]: value });
  }

  const [charactList, setCharacterList] = useState([]);
  useEffect(() => {
    setCharacter('');
    changeDisabled(team);
    const subUnitEvent = { target: { name: props.title + '_subUnit', value: team } };
    if (team) {
      handleSelectSubUnit(subUnitEvent);
    }
    const characterName = props.title + '_character';
    const characterEvent = { target: { name: props.title + '_chracter', value: formValue[characterName] } };
    if (team && formValue[characterName]) {
      handleSelectCharacter(characterEvent);
    }
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
  const makeFormSelectlist = makeFormSelectContents.map((c) => {
    return <MakeFormSelect key={c.id} id={props.title + '_' + c.id} sx={c.sx} label={c.label} inputLabel={c.label} value={c.value} handler={c.handler}
      selectList={c.selectList} disabled={c.disabled} helperText={c.helperText} />
  });
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
  return (
    <Fragment>
      <MakeMemberCard key="MakeMemberCard" makeFormSelect={makeFormSelect} title={props.title} border={props.border} color={props.color} clearHandler={handleClear} />
    </Fragment>
  );
}