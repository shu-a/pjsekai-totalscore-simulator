import React, { Fragment } from 'react';
import CardSet from './CardSet';
import CharacterArea from './Area/CharacterArea';
import AttrTeamArea from './Area/AttrTeamArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import { talantScoreCalc } from '../../components/TalantScoreCalc'
// import localforage from 'localforage';

const handlerSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  let characterArea = {};
  let characterRank = {};
  let teamArea = {};
  let attrArea = {};
  let reader = {};
  let subReader = {};
  let member1 = {};
  let member2 = {};
  let member3 = {};
  for (let key of formData.keys()) {
    let id = key.split('_')[0];
    let value = formData.get(key);
    if (id === 'characterArea') {
      characterArea = {...characterArea, [key]: value}
      // if (!value)
      //   break;
    } else if (id === 'characterRank') {
      console.log(id)
      characterRank = {...characterRank, [key]: value}
      // if (!value)
      //   break;
    } else if (id === 'teamArea') {
      teamArea = {...teamArea, [key]: value}
      // if (!value)
      //   break;
    } else if (id === 'attrArea') {
      attrArea = {...attrArea, [key]: value}
      // if (!value)
      //   break;
    } else if (id === 'Reader') {
      reader = {...reader, [key]: value}
    } else if (id === 'SubReader') {
      subReader = {...subReader, [key]: value}
    } else if (id === 'Member1') {
      member1 = {...member1, [key]: value}
    } else if (id === 'Member2') {
      member2 = {...member2, [key]: value}
    } else if (id === 'Member3') {
      member3 = {...member3, [key]: value}
    }
     
  }
  const cardData = {}
  cardData.characterArea = characterArea;
  cardData.characterRank = characterRank;
  cardData.teamArea = teamArea;
  cardData.attrArea = attrArea;
  cardData.reader = reader;
  cardData.subReader = subReader;
  cardData.member1 = member1;
  cardData.member2 = member2;
  cardData.member3 = member3;
  cardData.bonus = 100;
  const readerSubUnit = reader.Reader_subUnit;
  const subReaderSubUnit = subReader.SubReader_subUnit;
  const member1SubUnit = member1.Member1_subUnit;
  const member2SubUnit = member2.Member2_subUnit;
  const member3SubUnit = member3.Member3_subUnit;
  const readerTeam = reader.Reader_team;
  const subReaderTeam = subReader.SubReader_team;
  const member1Team = member1.Member1_team;
  const member2Team = member2.Member2_team;
  const member3Team = member3.Member3_team;
  const readerAttr = reader.Reader_attr;
  const subReaderAttr = subReader.SubReader_attr;
  const member1Attr = member1.Member1_attr;
  const member2Attr = member2.Member2_attr;
  const member3Attr = member3.Member3_attr;
  let teamBonus = 'none';
  if (readerTeam === subReaderTeam && readerTeam === member1Team &&
    readerTeam === member2Team && readerTeam === member3Team) {
      if (readerTeam === 'piapro')
        teamBonus = 'piapro';
      else
        teamBonus = 'unit';
  } else if (readerSubUnit === subReaderSubUnit && readerSubUnit === member1SubUnit && readerSubUnit === member2SubUnit && readerSubUnit === member3SubUnit) {
    teamBonus = 'unit';
  }
  let attrBonus = 'N';
  if (readerAttr === subReaderAttr && readerAttr === member1Attr && readerAttr === member2Attr && readerAttr === member3Attr)
    attrBonus = 'Y';
  cardData.teamBonus = teamBonus;
  cardData.attrBonus = attrBonus;
  
  console.log('talant: ', talantScoreCalc(cardData));
}

export default function Card() {
  const content =
    <Box component='form' onSubmit={handlerSubmit}>
      <FormControl component='fieldset' variant='standard'>
        <Box sx={{
          display: 'flex'
        }}>
          <CharacterArea type='area' />
          <CharacterArea type='rank' />
        </Box>
        <Box sx={{
          display: 'flex'
        }}>
          <AttrTeamArea type='team' />
          <AttrTeamArea type='attr' />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <CardSet />
        </Box>
      </FormControl>
      <div>
        <Button type='submit'>클릭</Button>
      </div>
    </Box>;
  return (
    <Fragment>
      {content}
    </Fragment>
  );
}