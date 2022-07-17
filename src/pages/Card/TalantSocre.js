import React from 'react';
import Button from '@mui/material/Button';

// const style1 = {
//   backgroundColor: '#4ca692',
//   '&:hover': { backgroundColor: '#3b8071' }
// }
const style2 = {
  backgroundColor: '#ffffff',
  color: '#3b8071',
  '&:hover': { color: '#ffffff', backgroundColor: '#3b8071' }
}

export default function TalantScore() {
  return(
    <div>
      <Button type="submit" variant="contained" sx={style2} form="talantForm">
        종합력 계산
      </Button>
    </div>
  );
}