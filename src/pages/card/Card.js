import React, { useState } from 'react';
import CardSet from './CardSet';
import CharacterArea from './CharacterArea';
import AttrTeamArea from './AttrTeamArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Grid } from '@mui/material';
import SekaiViewerLink from '../SekaiViewerLink';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { talantScore } from '../../components/TalantScoreCalc'
import Chip from '@mui/material/Chip';

const gridStyle = {
  mt: 0.5,
  mb: 0.5
}
const style3 = {
  backgroundColor: '#00b3a4',
  '&:hover': { backgroundColor: '#008075' },
  width: 100,
  fontSize: 15
}

export default function Card() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    const totalScore = talantScore(event);
    setTotalScore(totalScore.totalScore);
    setAreaBonus(totalScore.areaBonus);
    setRankBonus(totalScore.rankBonus);
    setTitleBonus(totalScore.titleBonus);
    setPtsScore(totalScore.ptsScore);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [totalScore, setTotalScore] = useState('');
  const [areaBonus, setAreaBonus] = useState('');
  const [rankBonus, setRankBonus] = useState('');
  const [titleBonus, setTitleBonus] = useState('');
  const [ptsScore, setPtsScore] = useState('');
  return (
    <Box component="form" onSubmit={handleSubmit} id="talantForm">
      <FormControl component="fieldset" variant="standard">
        <Grid container sx={{ maxWidth: 1550 }}>
          <Grid container spacing={0.5} sx={gridStyle}>
            <Grid item xs>
              <SekaiViewerLink />
            </Grid>
          </Grid>
          <Grid container spacing={0.5} sx={gridStyle}>
            <Grid item xs>
              <CharacterArea type="area" />
            </Grid>
            <Grid item xs>
              <CharacterArea type="rank" />
            </Grid>
          </Grid>
          <Grid container spacing={0.5} sx={gridStyle}>
            <Grid item xs>
              <AttrTeamArea type="team" />
            </Grid>
            <Grid item xs>
              <AttrTeamArea type="attr" />
            </Grid>
          </Grid>
          <Grid container spacing={0.05} sx={gridStyle}>
            <CardSet />
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ sx: { borderRadius: 3 } }}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title" sx={{ color: '#ffffff', backgroundColor: '#00b3a4', textAlign: 'center' }}>
            {"종합 능력치 상세 보기"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText component="div" id="alert-dialog-description" sx={{ textAlign: 'center', pr: 3, pl: 3, mt: 2 }}>
              <Box component="div" sx={{ fontSize: 20 }}>종합 능력치<br /></Box>
              <Box component="div" sx={{ fontSize: 25, mb: 1 }}>
                <img src={require('../../assets/icon_totalStrength.png')} alt="icon" width="15" /> {totalScore}<br />
              </Box>
              <Grid container spacing={3} sx={{ m: 0, width: '100%', backgroundColor: '#feffed', borderRadius: 3, p: 1, border: 2, borderColor: '#cceeef' }}>
                <Grid container justifyContent="space-between" sx={{ pb: 1, borderBottom: 2, borderColor: '#cceeef' }}>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    <Chip sx={{ backgroundColor: '#00b3a4', color: '#ffffff', width: 220, height: 30, fontSize: 15 }} label="종합 능력치" />
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    {ptsScore}
                  </Grid>
                  <Grid item xs>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    <Chip sx={{ backgroundColor: '#00b3a4', color: '#ffffff', width: 220, height: 30, fontSize: 15 }} label="에어리어 아이템 보너스" />
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    {areaBonus}
                  </Grid>
                  <Grid item xs>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    <Chip sx={{ backgroundColor: '#00b3a4', color: '#ffffff', width: 220, height: 30, fontSize: 15 }} label="캐릭터 랭크 보너스" />
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    {rankBonus}
                  </Grid>
                  <Grid item xs>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between" sx={{ pb: 1 }}>
                  <Grid item xs={2}>
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    <Chip sx={{ backgroundColor: '#00b3a4', color: '#ffffff', width: 220, height: 30, fontSize: 15 }} label="칭호 보너스" />
                  </Grid>
                  <Grid item xs={5} sx={{ fontSize: 20, mt: 1 }}>
                    {titleBonus}
                  </Grid>
                  <Grid item xs>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogContent sx={{ textAlign: 'center', pt: 0, pb: 3 }}>
            <Button onClick={handleClose} autoFocus variant="contained" sx={style3}>
              확인
            </Button>
          </DialogContent>
        </Dialog>
      </FormControl>
    </Box>
  );
}