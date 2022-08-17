import React, { Component, Fragment, useState } from 'react';
import { Box } from '@mui/material';
import MakeAccordion from '../../components/MakeAccordion';
import MakeViewer from '../../components/MakeViewer';
const boxStyle = {
  fontSize: 20,
  backgroundColor: '#008075',
  color: '#ffffff',
  p: 2,
  mb: 1
}
export default function SimpleAccordion() {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [visible, setVisible] = useState(false);
  const viewerOpen = (src: NodeRequire, alt: string) => {
    setSrc(src);
    setAlt(alt);
    setVisible(true);
  }
  const viewerClose = () => {
    setVisible(false);
  }

  const AreaInfo = () => {
    return (
      <Fragment>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20 }}>
            <Box sx={boxStyle}>{"메뉴 > 소지품 > 에어리어 아이템 > 효과 확인"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/app/area_2.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/app/area_2.png'), '');
              }} />
            <img src={require('../../assets/manual/app/area_3.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/app/area_3.png'), '');
              }} />
          </Box>
        </Box>
      </Fragment>
    );
  }
  const RankInfo = () => {
    return (
      <Fragment>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20 }}>
            <Box sx={boxStyle}>{"메뉴 > 프로필 > 기본 프로필 > 오른쪽 화살표 > 캐릭터 랭크"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/app/profile_2.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/app/profile_2.png'), '');
              }} />
          </Box>
        </Box>
      </Fragment>
    );
  }
  const TitleBonusInfo = () => {
    return (
      <Fragment>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20 }}>
            <Box sx={boxStyle}>{"메뉴 > 프로필 > 기본 프로필 > 칭호 > 종합 능력치 보너스"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/app/profile_1_1.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/app/profile_1_1.png'), '');
              }} />
          </Box>
        </Box>
      </Fragment>
    );
  }
  const CardManual = () => {
    return (
      <Fragment>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20 }}>
            <Box sx={boxStyle}>{"1. SEKAI VIEWER 버튼 클릭"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/home/sekai_viewer.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/home/sekai_viewer.png'), '');
              }} />
          </Box>
        </Box>
        <Box sx={{ border: '2px solid #cceeef' }} />
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20, mt: 1 }}>
            <Box sx={boxStyle}>{"2. SEKAI VIEWER 사이트에서 원하는 카드를 선택"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/sekai/sekai_1.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/sekai/sekai_1.png'), '');
              }} />
          </Box>
        </Box>
        <Box sx={{ border: '2px solid #cceeef' }} />
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20, mt: 1 }}>
            <Box sx={boxStyle}>{"3. 원하는 Master Rank, Card Level을 선택 후 Performance, Technique, Stamina와 캐릭터 정보를 카드 정보에 입력"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/sekai/sekai_2.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/sekai/sekai_2.png'), '');
              }} />
          </Box>
        </Box>
        <Box sx={{ border: '2px solid #cceeef' }} />
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontSize: 20, mt: 1 }}>
            <Box sx={boxStyle}>{"4. 입력한 정보를 확인 후 종합력 계산 버튼을 클릭"}</Box>
          </Box>
          <Box>
            <img src={require('../../assets/manual/home/card_2.png')} alt="" width="90%"
              onClick={e => {
                e.preventDefault();
                viewerOpen(require('../../assets/manual/home/card_2.png'), '');
              }} />
          </Box>
        </Box>
      </Fragment>
    );
  }
  const accordion = [];
  interface InfObj {
    title: string
    content: JSX.Element
  }
  let obj: InfObj = {
    title: "에어리어 정보 위치",
    content: <AreaInfo />
  }
  accordion.push(obj);

  obj.title = "캐릭터 랭크 정보 위치";
  obj.content = <RankInfo />;
  accordion.push(obj);

  obj.title = "칭호 보너스 정보 위치";
  obj.content = <TitleBonusInfo />;
  accordion.push(obj);

  obj.title = "카드 정보 입력 방법";
  obj.content = <CardManual />;
  accordion.push(obj);
  let i = 0;
  const content = accordion.map(c => {
    i = i + 1;
    return <MakeAccordion key={i} id={i} title={c.title} content={c.content} sx={{ fontSize: 20 }} />;
  });
  return (
    <Box sx={{ pt: 1, pl: 5, pr: 5 }}>
      {content}
      <MakeViewer src={src} alt={alt} visible={visible} close={viewerClose} />
    </Box>
  );
}