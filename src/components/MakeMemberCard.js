import React from 'react';
import MakeCard from './MakeCard';

export default function MakeMemberCard(props) {
  /* 옵션
  sx
  id
  title
  content
  */
  return (
    <MakeCard
      sx={{
        width: 298,
        maxWidth: 310,
        pb: 2,
        ml: 0.5,
        mr: 0.5,
        mb: 0.5,
        border: props.border,
        borderColor: props.color
      }}
      clearHandler={props.clearHandler}
      id="teamCard"
      key="teamCard"
      title={props.title}
      content={props.makeFormSelect}
    />
  );
}