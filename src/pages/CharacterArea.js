import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { flexbox } from '@mui/system';

export default function CharacterArea(props) {
  console.log(props.type);
  const characterList = [...props.characterList];
  const type = props.type;
  let textField = [];
  for (let i = 0; i < characterList.length; i++) {
    let characterInfo = characterList[i];
    textField.push(<TextField
      required
      id={type === 'area' ? 'chareactArea_' + characterInfo.id : 'characterRank_' + characterInfo.id}
      rows="number"
      label={characterInfo.firstName ? characterInfo.firstName + ' ' + characterInfo.givenName : characterInfo.givenName}
      defaultValue=""
      variant="standard"
      sx={{ width: 256, margin: 1 }}
    />);
  }
  return (
    <Card variant="outlined" sx={{ minWidth:300, maxWidth: 600, paddingBottom: 2, margin: 0.5, display: flexbox }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={type === 'area' ? '캐릭터 에어리어' : '캐릭터 랭크'}
      // subheader=""
      />
      <React.Fragment>
        {textField}
      </React.Fragment>
    </Card>
  );
}