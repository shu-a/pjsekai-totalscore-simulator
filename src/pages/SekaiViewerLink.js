import React from 'react';
import Button from '@mui/material/Button';

const style1 = {
  backgroundColor: '#4ca692',
  '&:hover': { backgroundColor: '#3b8071' }
}
// const style2 = {
//   backgroundColor: '#ffffff',
//   color: '#3b8071',
//   '&:hover': { color: '#ffffff', backgroundColor: '#3b8071' }
// }

function SekaiViewerLink() {
  return(
    <div>
      <Button variant="contained" sx={style1} onClick={e => {
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