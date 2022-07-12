import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

export default function MakeCard(props) {
  /* 옵션
  sx
  id
  title
  subheader
  content
  */
  const card = [];
  card.push(
    <Card
      variant="outlined"
      sx={props.sx}
      key={props.id}
      name={props.id}
    >
      <CardHeader
        action={
          <IconButton aria-label={'ariaLabel_' + props.id}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
        key={props.id}
        name={props.id}
      />
      {props.content}
    </Card>
  );
  return (
    <Fragment>
      {card}
    </Fragment>
  );
}