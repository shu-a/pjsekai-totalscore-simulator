import './App.css';
import React, { useState } from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import Card from './pages/card/Card';
import CharacterArea from './pages/CharacterArea';
import AttrTeamArea from './pages/AttrTeamArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

const rankBonus = (pVal, tVal, sVal, rankVal) => {
  return Math.floor(Number(pVal) * Number(rankVal) / 1000) + Math.floor(Number(tVal) * Number(rankVal) / 1000) + Math.floor(Number(sVal) * Number(rankVal) / 1000);
}
const areaBonus = (pVal, tVal, sVal, charVal, teamVal, areaVal) => {
  return (
    Math.floor(Number(pVal) * (Number(charVal) + Number(teamVal) + Number(areaVal)) / 100) + 
    Math.floor(Number(tVal) * (Number(charVal) + Number(teamVal) + Number(areaVal)) / 100) + 
    Math.floor(Number(sVal) * (Number(charVal) + Number(teamVal) + Number(areaVal)) / 100)
  );
}

function handlerSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  let deckCnt = 0;
  let areaRankCnt = 0;
  let readerCnt = 0;
  let subReaderCnt = 0;
  let member1Cnt = 0;
  let member2Cnt = 0;
  let member3Cnt = 0;
  for (let key of formData.keys()) {
    let value = formData.get(key);
    let id = key.split('_')[0];
    if (id === 'Reader' && value) {
      deckCnt += 1;
      readerCnt += 1;
    } else if (id === "SubReader" && value) {
      deckCnt += 1;
      subReaderCnt += 1;
    } else if (id === "Member1" && value) {
      deckCnt += 1;
      member1Cnt += 1;
    } else if (id === "Member2" && value) {
      deckCnt += 1;
      member2Cnt += 1;
    } else if (id === "Member3" && value) {
      deckCnt += 1;
      member3Cnt += 1;
    } else if(id === 'characterArea' && value) {
      areaRankCnt += 1;
    } else if(id === 'characterRank' && value) {
      areaRankCnt += 1;
    } else if(id === 'teamArea' && value) {
      areaRankCnt += 1;
    } else if(id === 'attrArea' && value) {
      areaRankCnt += 1;
    }
  }

  if (areaRankCnt < 63) {
    alert('에어리어와 랭크 정보를 모두 입력해주세요.');
  } else if (deckCnt === 0) {
    alert('덱 정보를 입력해주세요.');
  } else if (readerCnt > 0 && readerCnt < 8) {
    alert('Reader 덱 정보를 전부 입력해주세요.');
  } else if (subReaderCnt > 0 && subReaderCnt < 8) {
    alert('SubReader 덱 정보를 전부 입력해주세요.');
  } else if (member1Cnt > 0 && member1Cnt < 8) {
    alert('Member1 덱 정보를 전부 입력해주세요.');
  } else if (member2Cnt > 0 && member2Cnt < 8) {
    alert('Member2 덱 정보를 전부 입력해주세요.');
  } else if (member3Cnt > 0 && member3Cnt < 8) {
    alert('Member3 덱 정보를 전부 입력해주세요.');
  }
  
  if (readerCnt === 8) {
    console.log(rankBonus(formData.get('Reader_performance'), formData.get('Reader_technique'), formData.get('Reader_stamina'), formData.get('characterRank_1')));
    console.log(areaBonus(formData.get('Reader_performance'), formData.get('Reader_technique'), formData.get('Reader_stamina'), formData.get('characterArea_1'),
    formData.get('teamArea_light_sound'), formData.get('attrArea_cool')));
  } else if (subReaderCnt === 8) {
    
  } else if (member1Cnt === 8) {
    
  } else if (member2Cnt === 8) {
    
  } else if (member3Cnt === 8) {
    
  }
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
