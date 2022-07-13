import React, { useState, useEffect } from 'react';
import { flexbox } from '@mui/system';
import { getTeamList, getAttrList } from '../apis/apiClient'
import MakeCard from '../components/MakeCard';
import MakeTextField from '../components/MakeTextField';

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
  }, [props.type]);
  const type = switchiId(props.type);

  const textField = attrTeamAreaList.map((c) =>
    <MakeTextField key={type + c.unit} id={type + c.unit} label={c.unitName} defaultValue='' type={'number'} sx={{ width: 256, margin: 1 }} />
  );

  return (
    <MakeCard
      sx={{
        minWidth: 300,
        maxWidth: 765,
        paddingBottom: 2,
        margin: 0.5,
        marginTop: 1,
        display: flexbox
      }}
      id="teamCard"
      key="teamCard"
      title={switchTitle(props.type)}
      content={textField}
    />
  );
}