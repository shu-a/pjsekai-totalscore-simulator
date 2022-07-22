import React, { useEffect, useState } from 'react';
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
import MakeViewer from '../../components/MakeViewer';

const style3 = {
  backgroundColor: '#00b3a4',
  '&:hover': { backgroundColor: '#008075' },
  width: 100,
  fontSize: 15
}
const imgSrc = {
  sekai_viewer: require('../../assets/manual/home/sekai_viewer.png'),
  sekai_1: require('../../assets/manual/sekai/sekai_1.png'),
  sekai_2: require('../../assets/manual/sekai/sekai_2.png'),
  card_2: require('../../assets/manual/home/card_2.png')
}
const dialog = {
  img: {
    textAlign: 'center',
    pr: 3,
    pl: 3,
    mt: 2
  },
  info: {
    mt: 2,
    p: 3,
    textAlign: 'center',
    fontSize: 20
  }
}

export default function ActionAreaCard(props) {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [visible, setVisible] = useState(false);
  const viewerOpen = (src, alt) => {
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
          image={require('../../assets/manual/home/card_2.png')}
          alt="설명"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            카드 덱 입력 방법
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
          카드 덱 입력 방법
        </DialogTitle>
        <DialogContent sx={{ height: '50vh' }}>
          <DialogContent component="div" id="alert-dialog-description" sx={dialog.img}
            onClick={e => {
              e.preventDefault();
              viewerOpen(imgSrc.sekai_viewer, '');
            }}>
            <img src={imgSrc.sekai_viewer} width="100%" />
          </DialogContent>
          <DialogContentText sx={dialog.info}>
            1. SEKAI VIEWER 버튼 클릭
          </DialogContentText>
          <DialogContentText component="div" id="alert-dialog-description" sx={dialog.img}
            onClick={e => {
              e.preventDefault();
              viewerOpen(imgSrc.sekai_1, '');
            }}>
            <img src={imgSrc.sekai_1} width="100%" />
          </DialogContentText>
          <DialogContentText sx={{ mt: 2, p: 3, textAlign: 'center', fontSize: 20 }}>
            2. SEKAI VIEWER 사이트에서 원하는 카드를 선택
          </DialogContentText>
          <DialogContentText component="div" id="alert-dialog-description" sx={dialog.img}
            onClick={e => {
              e.preventDefault();
              viewerOpen(imgSrc.sekai_2, '');
            }}>
            <img src={imgSrc.sekai_2} width="100%" />
          </DialogContentText>
          <DialogContentText sx={{ mt: 2, p: 3, textAlign: 'center', fontSize: 20 }}>
            3. Master Rank, Card Level을 선택 후 나온 Performance, Technique, Stamina와 캐릭터 정보를 카드 덱에 입력
          </DialogContentText>
          <DialogContentText component="div" id="alert-dialog-description" sx={dialog.img}
            onClick={e => {
              e.preventDefault();
              viewerOpen(imgSrc.card_2, '');
            }}>
            <img src={imgSrc.card_2} width="100%" />
          </DialogContentText>
          <DialogContentText sx={{ mt: 2, p: 3, textAlign: 'center', fontSize: 20 }}>
            4. 정보를 맞게 입력했나 확인한 후 종합력 계산 버튼을 클릭
          </DialogContentText>
        </DialogContent>
        <DialogContent sx={{ textAlign: 'center', pt: 3, pb: 3 }}>
          <Button onClick={handleClose} autoFocus variant="contained" sx={style3}>
            확인
          </Button>
        </DialogContent>
      </Dialog>
      <MakeViewer src={src} alt={alt} visible={visible} close={viewerClose} />
    </Card>
  );
}
