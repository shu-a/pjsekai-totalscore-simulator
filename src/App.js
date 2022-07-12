import './App.css';
import React from 'react';
import SekaiViewerLink from './pages/SekaiViewerLink';
import CardList from './pages/CardList';
import CharacterArea from './pages/CharacterArea';
import AttrTeamArea from './pages/AttrTeamArea';
import Box from '@mui/material/Box';
// import TeamList from './components/TeamList';

function App() {
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
        <CardList />
      </Box>
    </div>
  );
}

export default App;
