import './App.css';
import React, { useState } from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import CardList from './pages/CardList';
import CharacterArea from './pages/CharacterArea';
import AttrTeamArea from './pages/AttrTeamArea';
import Box from '@mui/material/Box';

function App() {
  const [cardList, setCardList] = useState('');

  return (
    <div className="App">
      <SekaiViewerLink />
      <Box sx={{ display: 'flex' }}>
        <CharacterArea type='area' />
        <CharacterArea type='rank' />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <AttrTeamArea type='team' />
        <AttrTeamArea type='attr' />
      </Box>
      <Box sx={{ display: 'flex' }}>
        {cardList}
      </Box>
    </div>
  );
}

export default App;
