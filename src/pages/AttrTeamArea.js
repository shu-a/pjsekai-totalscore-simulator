import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { flexbox } from '@mui/system';

function switchiId(props) {
  switch (props) {
    case 'team':
      return 'teamArea_';
    case 'attr':
      return 'attrArea_';
    default:
      return '';
  }
}

function switchTitle(props) {
  switch (props) {
    case 'team':
      return '팀 에어리어';
    case 'attr':
      return '속성 에어리어';
    default:
      return '';
  }
}

export default function AttrTeamArea(props) {
  console.log(props);
  const attrTeamAreaList = [...props.attrTeamAreaList];
  console.log(attrTeamAreaList)
  const type = switchiId(props.type);
  let textField = [];
  for (let i = 0; i < attrTeamAreaList.length; i++) {
    let attrTeamListInfo = attrTeamAreaList[i];
    textField.push(<TextField
      required
      key={type + attrTeamListInfo.seq}
      id={type + attrTeamListInfo.seq}
      label={attrTeamListInfo.unitName}
      defaultValue=""
      variant="standard"
      sx={{ width: 256, margin: 1 }}
      type="number"
    />);
  }
  return (
    <Card variant="outlined" sx={{ minWidth:300, maxWidth: 600, paddingBottom: 2, margin: 0.5, marginTop: 3, display: flexbox }}>
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