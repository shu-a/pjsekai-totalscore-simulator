import React, { useState, Fragment, useEffect } from 'react';
import MakeMemberCard from '../../components/MakeMemberCard';
import MenuItem from '@mui/material/MenuItem';
import MakeFormSelect from '../../components/MakeFormSelect';
import MakeTextField from '../../components/MakeTextField';

export default function CardContents(props) {
  const [disabled, setDisabled] = useState(true);
  const changeDisabled = (affiliation) => {
    if (affiliation) {
      setDisabled(false);
      setHelperText('');
    }
    else {
      setDisabled(true);
      setHelperText(defaultHelperText);
    }
  }
  
  const [attr, setAttr] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [team, setTeam] = useState('');
  const [character, setCharacter] = useState('');
  const [rarities, setRarities] = useState('');
  const handleSelectAttr = (event) => {
    setAttr(event.target.value);
  }
  const handleSelectAffiliation = (event) => {
    setAffiliation(event.target.value);
    setCharacter('');
  }
  const handleSelectTeam = (event) => {
    setTeam(event.target.value);
  }
  const handleSelectRarities = (event) => {
    setRarities(event.target.value);
  }
  const handleSelectCharacter = (event) => {
    setCharacter(event.target.value);
  }

  const [charactList, setCharacterList] = useState([]);
  useEffect(() => {
    changeDisabled(affiliation);
    if (affiliation === 'piapro')
      setTeam('');
    else
      setTeam(affiliation);      
    setCharacterList(props.characterList.map((c) => {
      if (affiliation === (c.unit))
        return <MenuItem key={c.id} value={c.id}>{c.fullName}</MenuItem>;
      else
        return false;
    }));
  }, [affiliation, props.characterList]);

  const affiliationList = props.teamList.map((c) =>
    <MenuItem key={c.seq} value={c.unit} unit={c.unit}>{c.unitName}</MenuItem>
  );
  const attrList = props.attrList.map((c) =>
    <MenuItem key={c.unit} value={c.unit}>{c.unitName}</MenuItem>
  );
  const teamList = props.teamList.map((c) => {
    if (Number(c.seq) !== 1)
      return <MenuItem key={c.unit} value={c.unit}>{c.unitName}</MenuItem>
    else
      return false
  });
  const raritiesList = props.raritiesList.map((c) =>
    <MenuItem key={c.seq} value={c.seq} >{c.cardRarityType.split('_')[1]}</MenuItem>
  );

  const makeFormSelect = [];
  const defaultHelperText = '소속을 선택하세요';
  const [helperText, setHelperText] = useState(defaultHelperText);
  const makeFormSelectContents = [
    { sx: { m: 1, width: 256 }, id: 'attr', label: '속성', value: attr, handler: handleSelectAttr, selectList: attrList },
    { sx: { m: 1, width: 120 }, id: 'affiliation', label: '소속', value: affiliation, handler: handleSelectAffiliation, selectList: affiliationList },
    { sx: { m: 1, width: 120 }, id: 'team', label: '팀', value: team, handler: handleSelectTeam, selectList: teamList, disabled: disabled, helperText: helperText },
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
  const makeTextFieldList = makeTextFieldContents.map((c) =>
    <MakeTextField key={c.id} id={props.title + '_' + c.id} label={c.label} defaultValue='' type={c.type} sx={c.sx} />
  );
  makeFormSelect.push(makeTextFieldList);
  
  const cardContents = <MakeMemberCard key='MakeMemberCard' makeFormSelect={makeFormSelect} title={props.title} border={props.border} color={props.color} />;
  return (
    <Fragment>
      {cardContents}
    </Fragment>
  );
}