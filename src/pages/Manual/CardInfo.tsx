import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MakeViewer from '../../components/MakeViewer.js';

const style3 = {
  backgroundColor: '#00b3a4',
  '&:hover': { backgroundColor: '#008075' },
  width: 100,
  fontSize: 15
}

export default function ActionAreaCard(props: any) {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [visible, setVisible] = useState(false);
  const viewerOpen = (src: any, alt: any) => {
    setSrc(src);
    setAlt(alt);
    setVisible(true);
  }
  const viewerClose = () => {
    setVisible(false);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Card sx={{ maxWidth: 345, m: 1, minWidth: 350 }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          image={props.imgSrc}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { borderRadius: 3 } }}
        maxWidth='lg'
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: '#ffffff', backgroundColor: '#00b3a4', textAlign: 'center' }}>
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText component="div" id="alert-dialog-description" sx={{ textAlign: 'center', pr: 3, pl: 3, mt: 2 }}
            onClick={(e: any) => {
              e.preventDefault();
              viewerOpen(props.imgSrc, '');
            }}>
            <img src={props.imgSrc} alt='' width="100%" />
          </DialogContentText>
          <DialogContentText sx={{ mt: 2, p: 3, textAlign: 'center', fontSize: 20 }}>
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogContent sx={{ textAlign: 'center', pt: 0, pb: 3 }}>
          <Button onClick={handleClose} autoFocus variant="contained" sx={style3}>
            확인
          </Button>
        </DialogContent>
      </Dialog>
      <MakeViewer src={src} alt={alt} visible={visible} close={viewerClose} />
    </Card>
  );
}
