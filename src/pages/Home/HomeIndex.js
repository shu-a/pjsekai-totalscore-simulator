import React, { Fragment } from 'react';
import CardIndex from '../Card/CardIndex';

export default function HomeIndex() {
  const content = <CardIndex />;
  return (
    <Fragment>
      {content}
    </Fragment>
  );
}