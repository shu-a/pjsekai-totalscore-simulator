import React from 'react';
import Button from '@mui/material/Button';

function SekaiViewerLink() {
  return(
    <div>
      <Button variant="outlined" onClick={e => {
        e.preventDefault();
        window.open('https://sekai.best/card', '_blank')
        console.log('클릭');
      }}>
        Sekai Viewer 카드 목록
      </Button>
    </div>
  );
}

export default SekaiViewerLink;