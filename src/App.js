import './App.css';
import React, { useState } from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import Card from './pages/card/Card';
import CharacterArea from './pages/CharacterArea';
import AttrTeamArea from './pages/AttrTeamArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

const memberScore = (array, characterArea, characterRank, teamArea, attrArea) => {
  let performance = 0;
  let technique = 0;
  let stamina = 0;
  let characterAreaScore = 0;
  let characterRankScore = 0;
  let teamAreaScore = 0;
  let affiliationScore = 0;
  let attrAreaScore = 0;
  let areaScore = 0;
  array.forEach(c => {
    let cardId = c.id.split('_')[1];  
    if (cardId === 'performance')
      performance = Number(c.value);
    if (cardId === 'technique')
      technique = Number(c.value);
    if (cardId === 'stamina')
    stamina = Number(c.value);
    if (cardId === 'character') {
      for (let i = 0; i < characterArea.length; i++) {
        let target = characterArea[i];
        let targetId = target.id.split('_')[1];
        if (targetId === c.value) {
          characterAreaScore = Number(target.value);
          break;
        }
      }
      for (let i = 0; i < characterRank.length; i++) {
        let target = characterRank[i];
        let targetId = target.id.split('_')[1];
        if (targetId === c.value) {
          characterRankScore = Number(target.value);
          break;
        }
      }
    }
    if (cardId === 'team' || cardId === 'affiliation') {
      for (let i = 0; i < teamArea.length; i++) {
        let target = teamArea[i];
        let targetId = '';
        if (target.id.split('_').length === 2)
          targetId = target.id.split('_')[1];
        else
          targetId = target.id.split('_')[1] + '_' + target.id.split('_')[2];
        console.log(targetId)
        if (targetId === c.value) {
          if (cardId === 'team') {
            teamAreaScore = Number(target.value);
            break;
          }
          else if (cardId === 'affiliation') {
            affiliationScore = Number(target.value);
            break;
          }
        }
      }
    }
    if (cardId === 'attr') {
      for (let i = 0; i < attrArea.length; i++) {
        let target = attrArea[i];
        let targetId = target.id.split('_')[1];
        if (targetId === c.value) {
          attrAreaScore = Number(target.value);
          break;
        }
      }
    }
  });
  if(teamAreaScore >= affiliationScore)
    areaScore = characterAreaScore + teamAreaScore + attrAreaScore;
  else
    areaScore = characterAreaScore + affiliationScore + attrAreaScore;
  console.log('areaScore', areaScore)
  console.log('teamAreaScore', teamAreaScore)
  console.log('affiliationScore', affiliationScore)
  console.log('attrAreaScore', attrAreaScore)

  return (
    rankBonus(performance, technique, stamina, characterRankScore) +
    areaBonus(performance, technique, stamina, areaScore) +
    performance + technique + stamina
  );
}

const rankBonus = (pVal, tVal, sVal, rankVal) => {
  return Math.floor(Number(pVal) * Number(rankVal) / 1000) + Math.floor(Number(tVal) * Number(rankVal) / 1000) + Math.floor(Number(sVal) * Number(rankVal) / 1000);
}
const areaBonus = (pVal, tVal, sVal, areaVal) => {
  console.log(areaVal)
  return (
    Math.floor(Number(pVal) * Number(areaVal) / 100) +
    Math.floor(Number(tVal) * Number(areaVal) / 100) +
    Math.floor(Number(sVal) * Number(areaVal) / 100)
  );
}

const msg = (message) => {
  return console.log(message);
}

const submitValidation = (array, maxIdx, message) => {
  let idx = array.length - 1;
  if (idx === maxIdx - 1) {
    if (!array[idx].value) {
      msg(message);
      document.getElementById(array[idx].id).focus();
      return false;
    } else {
      return true;
    }
  } else {
    msg(message);
    document.getElementById(array[idx].id).focus();
    return false;
  }
}
const handlerSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const characterArea = [];
  const characterRank = [];
  const teamArea = [];
  const attrArea = [];
  const reader = [];
  const subReader = [];
  const member1 = [];
  const member2 = [];
  const member3 = [];
  for (let key of formData.keys()) {
    let value = formData.get(key);
    let id = key.split('_')[0];
    if (id === 'characterArea') {
      characterArea.push({ id: key, value: value });
      if (!value)
        break;
    } else if (id === 'characterRank') {
      characterRank.push({ id: key, value: value });
      if (!value)
        break;
    } else if (id === 'teamArea') {
      teamArea.push({ id: key, value: value });
      if (!value)
        break;
    } else if (id === 'attrArea') {
      attrArea.push({ id: key, value: value });
      if (!value)
        break;
    } else if (id === 'Reader') {
      id += key.split('_')[1];
      reader.push({ id: key, value: value });
    } else if (id === 'SubReader') {
      id += key.split('_')[1];
      subReader.push({ id: key, value: value });
    } else if (id === 'Member1') {
      id += key.split('_')[1];
      member1.push({ id: key, value: value });
    } else if (id === 'Member2') {
      id += key.split('_')[1];
      member2.push({ id: key, value: value });
    } else if (id === 'Member3') {
      id += key.split('_')[1];
      member3.push({ id: key, value: value });
    }
  }
  
  if (!submitValidation(characterArea, 26, '캐릭터 에어리어 정보를 모두 입력해주세요.'))
    return false;
  else if (!submitValidation(characterRank, 26, '캐릭터 랭크 정보를 모두 입력해주세요.'))
    return false;
  else if (!submitValidation(teamArea, 6, '팀 에어리어 정보를 모두 입력해주세요.'))
    return false;
  else if (!submitValidation(attrArea, 5, '속성 에어리어 정보를 모두 입력해주세요.'))
    return false;
  // else if (!submitValidation(reader, 8, 'Reader 정보를 모두 입력해주세요.'))
  //   return false;
  // else if (!submitValidation(subReader, 8, 'SubReader 정보를 모두 입력해주세요.'))
  //   return false;
  // else if (!submitValidation(member1, 8, 'Member1 정보를 모두 입력해주세요.'))
  //   return false;
  // else if (!submitValidation(member2, 8, 'Member2 정보를 모두 입력해주세요.'))
  //   return false;
  // else if (!submitValidation(member3, 8, 'Member3 정보를 모두 입력해주세요.'))
  //   return false;
}

function App() {

  return (
    <div className="App">
      <SekaiViewerLink />
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
            <Card />
          </Box>
        </FormControl>
        <div>
          <Button type='submit'>클릭</Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
