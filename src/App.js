import './App.css';
import React, { useState } from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import CardList from './pages/CardList';
import CharacterArea from './pages/CharacterArea';
import TeamArea from './pages/TeamArea';
import axios from 'axios';
import Box from '@mui/material/Box';

async function getUser() {
  let characterList = [];
  try {
    const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/gameCharacters.json');
    // console.log(response);
    characterList = [...response.data];

    // console.log('characterList\n', characterList);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [characterArea, setCharacterArea] = useState('');
  const [characterRank, setCharacterRank] = useState('');
  const [loadCharacterList, setLoadCharacterList] = useState('N');
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

  return (
    <div className="App">
      <SekaiViewerLink />
      <Box sx={{ display: 'flex' }}>
        {characterArea}
        {characterRank}
      </Box>      
      <TeamArea />
      <CardList />
    </div>
  );
}

export default App;
