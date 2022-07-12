import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { flexbox } from '@mui/system';
import axios from 'axios';
import { getTeamList, getAttrList } from '../apis/apiClient'

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
  const [attrTeamAreaList, setAttrTeamAreaList] = useState([]);  
  useEffect(() => {
    if (props.type === 'attr')
      setAttrTeamAreaList(getAttrList());
    else if (props.type === 'team')
      getTeamList().then((resData) => setAttrTeamAreaList(resData));
  }, []);
  const type = switchiId(props.type);
  let textField = [];
  if (attrTeamAreaList.length > 0) {
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
      <Fragment>
        {textField}
      </Fragment>
    </Card>
  );
}