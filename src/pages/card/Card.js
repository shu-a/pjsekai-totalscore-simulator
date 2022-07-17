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

const gridStyle = {
  mt: 0.5,
  mb: 0.5
}

export default function Card() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    setValue(talantScore(event));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
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
        >
          <DialogTitle id="alert-dialog-title">
            {"종합력 계산 결과"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {value}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </FormControl>
    </Box>
  );
}