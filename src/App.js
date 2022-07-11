import './App.css';
import React, { useState } from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import CardList from './pages/CardList';
import CharacterArea from './pages/CharacterArea';
import AttrTeamArea from './pages/AttrTeamArea';
import axios from 'axios';
import Box from '@mui/material/Box';

function App() {
  const [characterArea, setCharacterArea] = useState('');
  const [characterRank, setCharacterRank] = useState('');
  const [teamArea, setTeamArea] = useState('');
  const [attrArea, setAttrArea] = useState('');
  const [loadCharacterList, setLoadCharacterList] = useState('N');
  const [loadTeamList, setLoadTeamList] = useState('N');
  if (loadCharacterList === 'N') {
    axios({
      method: 'get',
      url: 'https://shu-a.github.io/sekai-master-db-kr-diff/gameCharacters.json'
    })
      .then(function (response) {
        const characterList = response.data;
        setCharacterArea(<CharacterArea characterList={characterList} type='area' />);
        setCharacterRank(<CharacterArea characterList={characterList} type='rank' />);
        setLoadCharacterList('Y');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (loadTeamList === 'N') {
    axios({
      method: 'get',
      url: 'https://shu-a.github.io/sekai-master-db-kr-diff/unitProfiles.json'
    })
      .then(function (response) {
        const teamList = response.data;
        setTeamArea(<AttrTeamArea attrTeamAreaList={teamList} type='team' />);
        const attrList = [{
          "seq": 46,
          "areaItemId": 46,
          "level": 1,
          "targetUnit": "any",
          "targetCardAttr": "cool",
          "unit": "cool",
          "unitName": "쿨"
        },
        {
          "seq": 48,
          "areaItemId": 48,
          "level": 1,
          "targetUnit": "any",
          "targetCardAttr": "cute",
          "unit": "cute",
          "unitName": "큐트"
        },
        {
          "seq": 50,
          "areaItemId": 50,
          "level": 1,
          "targetUnit": "any",
          "targetCardAttr": "pure",
          "unit": "pure",
          "unitName": "퓨어"
        },
        {
          "seq": 52,
          "areaItemId": 52,
          "level": 1,
          "targetUnit": "any",
          "targetCardAttr": "happy",
          "unit": "happy",
          "unitName": "해피"
        },
        {
          "seq": 54,
          "areaItemId": 54,
          "level": 1,
          "targetUnit": "any",
          "targetCardAttr": "mysterious",
          "unit": "mysterious",
          "unitName": "미스테리어스"
        }];
        setAttrArea(<AttrTeamArea attrTeamAreaList={attrList} type='attr' />);
        setLoadTeamList('Y');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <SekaiViewerLink />
      <Box sx={{ display: 'flex' }}>
        {characterArea}
        {characterRank}
      </Box>
      <Box sx={{ display: 'flex' }}>
        {teamArea}
        {attrArea}
      </Box>
      <CardList />
    </div>
  );
}

export default App;
