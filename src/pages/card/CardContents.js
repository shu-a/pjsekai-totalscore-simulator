import React, { useState, Fragment } from 'react';
import MakeMemberCard from '../../components/MakeMemberCard';
import MenuItem from '@mui/material/MenuItem';
import MakeFormSelect from '../../components/MakeFormSelect';
import MakeTextField from '../../components/MakeTextField';

export default function CardContents(props) {
  const [disabled, setDisabled] = useState(true);
  // 값 및 핸들러
  const [attr, setAttr] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [team, setTeam] = useState('');
  const [character, setCharacter] = useState('');
  const [rarities, setRarities] = useState('');
  const HandlerSelectAttr = (event) => {
    setAttr(event.target.value);
  }
  const HandlerSelectAffiliation = (event) => {
    setAffiliation(event.target.value);
    // console.log(event);
    enableCharacter(event.target.value);
  }
  const HandlerSelectTeam = (event) => {
    setTeam(event.target.value);
  }
  const HandlerSelectRarities = (event) => {
    setRarities(event.target.value);
  }
  const HandlerSelectCharacter = (event) => {
    setCharacter(event.target.value);
  }

  // const _characterList = [];
  const [__characterList, __setCharacterList] = useState([]);
  const enableCharacter = (value) => {
    setCharacter('');
    if (value)
      setDisabled(false);
    else
      setDisabled(true);

    const _characterList = props.characterList.map((c) => {
      if (value === ('affiliation_' + c.unit))
        return <MenuItem key={c.id} value={'character_' + c.id}>{c.fullName}</MenuItem>;
      else
        return false;
    });
    __setCharacterList(_characterList);
  }

  const _affiliationList = props.teamList.map((c) =>
  // ***
    <MenuItem key={'affiliation_' + c.seq} value={'affiliation_' + c.unit} unit={'affiliation_' + c.unit}>{c.unitName}</MenuItem>
  );
  const _attrList = props.attrList.map((c) =>
    <MenuItem key={'attr_' + c.seq} value={'attr_' + c.seq}>{c.unitName}</MenuItem>
  );
  const _teamList = props.teamList.map((c) => {
    if (Number(c.seq) !== 1)
      return <MenuItem key={'team_' + c.seq} value={'team_' + c.seq}>{c.unitName}</MenuItem>
    else
      return false
  });
  const _raritiesList = props.raritiesList.map((c) =>
    <MenuItem key={'rarities_' + c.seq} value={'rarities_' + c.seq} >{c.cardRarityType.split('_')[1]}</MenuItem>
  );

  const makeFormSelect = [];

  const makeFormSelectContents = [
    { sx: { m: 1, width: 256 }, id: 'attr', label: '속성', value: attr, handler: HandlerSelectAttr, selectList: _attrList },
    { sx: { m: 1, width: 120 }, id: 'affiliation', label: '소속', value: affiliation, handler: HandlerSelectAffiliation, selectList: _affiliationList },
    { sx: { m: 1, width: 120 }, id: 'team', label: '팀', value: team, handler: HandlerSelectTeam, selectList: _teamList },
    { sx: { m: 1, width: 120 }, id: 'rarities', label: '성급', value: rarities, handler: HandlerSelectRarities, selectList: _raritiesList },
    { sx: { m: 1, width: 120 }, id: 'character', label: '캐릭터명', value: character, handler: HandlerSelectCharacter, selectList: __characterList, disabled: disabled, helperText: '팀을 선택하세요.' }
  ];
  const makeFormSelectlist = makeFormSelectContents.map((c) =>
    <MakeFormSelect key={c.id} id={props.title + '_' + c.id} sx={c.sx} label={c.label} inputLabel={c.label} value={c.value} handler={c.handler}
    selectList={c.selectList} disabled={c.disabled} helperText={c.makeFormSelectlist} />
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
  const cardContents = [];
  cardContents.push(<MakeMemberCard key='MakeMemberCard' makeFormSelect={makeFormSelect} title={props.title} border={props.border} color={props.color} />);
  return (
    <Fragment>
      {cardContents}
    </Fragment>
  );
}