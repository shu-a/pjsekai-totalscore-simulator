import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { flexbox } from '@mui/system';
import axios from 'axios';

function switchiId(props) {
  switch (props) {
    case 'area':
      return 'characterArea_';
    case 'rank':
      return 'characterRank_';
    default:
      return '';
  }
}

function switchTitle(props) {
  switch (props) {
    case 'area':
      return '캐릭터 에어리어';
    case 'rank':
      return '캐릭터 랭크';
    default:
      return '';
  }
}

export default function CharacterArea(props) {
  const [characterList, setCharacterList] = React.useState([]);
  const [characterLoad, setCharacterLoad] = React.useState('N');
  const getCharacterList = async () => {
    if (characterLoad === 'N') {
      try {
        const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/gameCharacters.json');
        setCharacterList(response.data);
        setCharacterLoad('Y');
      } catch (error) {
        console.log(error);
      }
    }
  }
  getCharacterList();
  const type = switchiId(props.type);
  let textField = [];
  if (characterList.length > 0) {
    for (let i = 0; i < characterList.length; i++) {
      let characterInfo = characterList[i];
      textField.push(<TextField
        required
        key={type + characterInfo.id}
        id={type + characterInfo.id}
        label={characterInfo.firstName ? characterInfo.firstName + ' ' + characterInfo.givenName : characterInfo.givenName}
        defaultValue=""
        variant="standard"
        sx={{ width: 256, margin: 1 }}
        type="number"
      />);
    }
  }
  return (
    <Card variant="outlined" sx={{ minWidth: 300, maxWidth: 600, paddingBottom: 2, margin: 0.5, marginTop: 3, display: flexbox }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={switchTitle(props.type)}
      // subheader=""
      />
      <React.Fragment>
        {textField}
      </React.Fragment>
    </Card>
  );
}