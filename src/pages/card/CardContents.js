import React, { useState, Fragment, useEffect } from 'react';
import MakeMemberCard from '../../components/MakeMemberCard';
import MenuItem from '@mui/material/MenuItem';
import MakeFormSelect from '../../components/MakeFormSelect';
import MakeTextField from '../../components/MakeTextField';
import localforage from 'localforage';

export default function CardContents(props) {
  const [readOnlySubUnit, setReadOnlySubUnit] = useState(true);
  const [readOnlyCharacter, setReadOnlyCharacter] = useState(true);
  const changeReadonly = (team) => {
    if (team && team === 'piapro') {
      setReadOnlySubUnit(false);
      setReadOnlyCharacter(false);
      setHelperText(' ');
    } else if (team && team !== 'piapro') {
      setReadOnlySubUnit(true);
      setReadOnlyCharacter(false);
      setHelperText(' ');
    }
    else {
      setReadOnlySubUnit(true);
      setHelperText(defaultHelperText);
    }
  }
  const [formValue, setFormValue] = useState('');
  const [loadTeam, setLoadTeam] = useState('N');
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
    });// eslint-disable-next-line
  }, []);
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  useEffect(() => {
    localforage.setItem(props.title, formValue);// eslint-disable-next-line
  }, [formValue]);

  const handleClear = () => {
    setFormValue({});
    setAttr('');
    setTeam('');
    setSubUnit('');
    setCharacter('');
    setRarities('');
    setReadOnlySubUnit(true);
    setReadOnlyCharacter(true);
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
    setLoadTeam('Y');
    setLoadSubUnit('N');
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
  const [loadSubUnit, setLoadSubUnit] = useState('N');
  useEffect(() => {
    changeReadonly(team);
    const subUnitName = props.title + '_subUnit';
    if (team && loadTeam === 'N') {
      const subUnitEvent = { target: { name: subUnitName, value: formValue[subUnitName] } };
      handleSelectSubUnit(subUnitEvent);
      setLoadSubUnit('Y');
    } else if (team && loadTeam === 'Y') {
      setSubUnit('');
      const subUnitEvent = { target: { name: subUnitName, value: team } };
      handleSelectSubUnit(subUnitEvent);
      setLoadSubUnit('Y');
    }
    const characterName = props.title + '_character';
    if (loadSubUnit === 'Y') {
      setCharacterList(props.characterList.map((c) => {
        if (team === (c.unit))
          return <MenuItem key={c.id} value={c.id}>{c.fullName}</MenuItem>;
        else
          return false;
      }));
      if (team && loadTeam === 'N') {
        const characterEvent = { target: { name: characterName, value: formValue[characterName] } };
        handleSelectCharacter(characterEvent);
      } else if (team && loadTeam === 'Y') {
        setCharacter('');
        const characterEvent = { target: { name: characterName, value: '' } };
        handleSelectCharacter(characterEvent);
      }
    }// eslint-disable-next-line
  }, [team, loadSubUnit]);

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
    {
      sx: { m: 1, width: 120 }, id: 'subUnit', label: '서브유닛', selectSx: { color: readOnlySubUnit ? 'rgba(0, 0, 0, 0.38)' : '' },
      value: subUnit, handler: handleSelectSubUnit, selectList: teamList, helperText: helperText, readonly: readOnlySubUnit
    },
    { sx: { m: 1, width: 120 }, id: 'rarities', label: '별', value: rarities, handler: handleSelectRarities, selectList: raritiesList },
    {
      sx: { m: 1, width: 120 }, id: 'character', label: '캐릭터명', selectSx: { color: readOnlySubUnit ? 'rgba(0, 0, 0, 0.38)' : '' },
      value: character, handler: handleSelectCharacter, selectList: charactList, helperText: helperText, readonly: readOnlyCharacter
    }
  ];
  const makeFormSelectlist = makeFormSelectContents.map((c) => {
    return <MakeFormSelect key={c.id} id={props.title + '_' + c.id} sx={c.sx} label={c.label} inputLabel={c.label} value={c.value ? c.value : ''} handler={c.handler}
      selectList={c.selectList} readonly={c.readonly} helperText={c.helperText} />
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
      <MakeMemberCard key="MakeMemberCard" makeFormSelect={makeFormSelect} title={props.title} border={props.border} color={props.color}
      backgroundColor={props.backgroundColor} clearHandler={handleClear} />
    </Fragment>
  );
}