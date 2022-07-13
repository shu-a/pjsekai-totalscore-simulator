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
          paddingBottom: 2,
          margin: 0.5,
          marginTop: 1,
          border: props.border,
          borderColor: props.color
        }}
        id="teamCard"
        key="teamCard"
        title={props.title}
        content={props.makeFormSelect}
      />
  );
}