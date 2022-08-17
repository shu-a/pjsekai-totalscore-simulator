import React from 'react';
import Button from '@mui/material/Button';

// const style1 = {
//   backgroundColor: '#4ca692',
//   '&:hover': { backgroundColor: '#3b8071' }
// }
// const style2 = {
//   backgroundColor: '#ffffff',
//   color: '#3b8071',
//   '&:hover': { color: '#ffffff', backgroundColor: '#3b8071' }
// }
const style3 = {
  backgroundColor: '#ffffff',
  color: '#00b3a4',
  '&:hover': { color: '#ffffff', backgroundColor: '#008075' }
}

interface Props {
  disabled: boolean
}
export default function TotalScore(props: Props) {
  return (
    <div>
      <Button type="submit" variant="contained" sx={style3} form="talantForm" disabled={props.disabled}>
        종합력 계산
      </Button>
    </div>
  );
}