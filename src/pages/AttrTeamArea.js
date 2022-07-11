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
  const [attrTeamAreaList, setAttrTeamAreaList] = React.useState([]);
  const [teamLoad, setTeamLoad] = React.useState('N');
  const [attrLoad, setAttrLoad] = React.useState('N');
  const getTeamList = async () => {
    if (teamLoad === 'N') {
      try {
        const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/unitProfiles.json');
        setAttrTeamAreaList(response.data);
        setTeamLoad('Y');
      } catch (error) {
        console.log(error);
      }
    }
  }
  const getAttrList = () => {
    if (attrLoad === 'N') {
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
      setAttrTeamAreaList(attrList);
      setAttrLoad('Y');
    }
  }
  if (props.type === 'attr')
    getAttrList();
  else if (props.type === 'team')
    getTeamList();
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
      <React.Fragment>
        {textField}
      </React.Fragment>
    </Card>
  );
}