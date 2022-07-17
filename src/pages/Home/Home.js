import React, { Fragment } from 'react';
import Card from '../Card/Card';

export default function Home() {
  const content = <Card />;
  return (
    <Fragment>
      {content}
    </Fragment>
  );
}