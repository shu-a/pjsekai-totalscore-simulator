import React, { useState } from 'react';
import CardSet from './CardSet';
import CharacterArea from './CharacterArea';
import AttrTeamArea from './AttrTeamArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, Grid } from '@mui/material';
import SekaiViewerLink from '../SekaiViewerLink';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { talantScore } from '../../components/TalantScoreCalc'
import Chip from '@mui/material/Chip';

const gridStyle = {
  default: {
    mt: 0.5,
    mb: 0.5
  },
  bonus: {
    fontSize: 20,
    mt: 1,
    textAlign: 'right'
  },
  chip: {
    fontSize: 20,
    mt: 1
  }
}
const chipStyle = {
  backgroundColor: '#00b3a4',
  color: '#ffffff',
  width: 220,
  height: 30,
  fontSize: 15
}
const style3 = {
  backgroundColor: '#00b3a4',
  '&:hover': { backgroundColor: '#008075' },
  width: 100,
  fontSize: 15
}

export default function CardIndex() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const totalScore = talantScore(event);
    if (totalScore) {
      setOpen(true);
      setTotalScore(totalScore.totalScore ? totalScore.totalScore : 0);
      setAreaBonus(totalScore.areaBonus ? totalScore.areaBonus : 0);
      setRankBonus(totalScore.rankBonus ? totalScore.rankBonus : 0);
      setTitleBonus(totalScore.titleBonus ? totalScore.titleBonus : 0);
      setPtsScore(totalScore.ptsScore ? totalScore.ptsScore : 0);
    }
  }
  const handleClose = () => {
    setOpen(false);
  }
  const [open, setOpen] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [areaBonus, setAreaBonus] = useState(0);
  const [rankBonus, setRankBonus] = useState(0);
  const [titleBonus, setTitleBonus] = useState(0);
  const [ptsScore, setPtsScore] = useState(0);
  return (
    <Box component="form" onSubmit={handleSubmit} id="talantForm">
      <FormControl component="fieldset" variant="standard">
        <Grid container sx={{ maxWidth: 1550 }}>
          <Grid container spacing={0.5} sx={gridStyle.default}>
            <Grid item xs>
              <AttrTeamArea type="team" />
            </Grid>
            <Grid item xs>
              <AttrTeamArea type="attr" />
            </Grid>
          </Grid>
          <Grid container spacing={0.5} sx={gridStyle.default}>
            <Grid item xs>
              <CharacterArea type="area" />
            </Grid>
            <Grid item xs>
              <CharacterArea type="rank" />
            </Grid>
          </Grid>
          <Grid container spacing={0.5} sx={gridStyle.default}>
            <Grid item xs>
              <SekaiViewerLink />
            </Grid>
          </Grid>
          <Grid container spacing={0.05} sx={gridStyle.default}>
            <CardSet />
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ sx: { borderRadius: 3 } }}
          maxWidth='sm'
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
                  <Grid item xs={1} sm={2}>
                  </Grid>
                  <Grid item xs={5} sm={5} sx={gridStyle.chip}>
                    <Chip sx={chipStyle} label="종합 능력치" />
                  </Grid>
                  <Grid item xs={5} sm={3} sx={gridStyle.bonus}>
                    {ptsScore}
                  </Grid>
                  <Grid item xs sm>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item xs={1} sm={2}>
                  </Grid>
                  <Grid item xs={5} sm={5} sx={gridStyle.chip}>
                    <Chip sx={chipStyle} label="에어리어 아이템 보너스" />
                  </Grid>
                  <Grid item xs={5} sm={3} sx={gridStyle.bonus}>
                    {areaBonus}
                  </Grid>
                  <Grid item xs sm>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item xs={1} sm={2}>
                  </Grid>
                  <Grid item xs={5} sm={5} sx={gridStyle.chip}>
                    <Chip sx={chipStyle} label="캐릭터 랭크 보너스" />
                  </Grid>
                  <Grid item xs={5} sm={3} sx={gridStyle.bonus}>
                    {rankBonus}
                  </Grid>
                  <Grid item xs sm>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between" sx={{ pb: 1 }}>
                  <Grid item xs={1} sm={2}>
                  </Grid>
                  <Grid item xs={5} sm={5} sx={gridStyle.chip}>
                    <Chip sx={chipStyle} label="칭호 보너스" />
                  </Grid>
                  <Grid item xs={5} sm={3} sx={gridStyle.bonus}>
                    {titleBonus}
                  </Grid>
                  <Grid item xs sm>
                  </Grid>
                </Grid>
              </Grid>
              <Box sx={{ pt: 1, pb: 1 }}>
                ※ 에어리어 아이템 보너스에 오차가 있을 수 있습니다.
              </Box>
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