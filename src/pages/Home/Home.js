import React, { Fragment } from 'react';
import Card from '../Card/Card';
import SekaiViewerLink from '../SekaiViewerLink';

export default function Home() {
  const content = <Card />;
  return (
    <Fragment>
      <SekaiViewerLink />
      {content}
    </Fragment>
  );
}