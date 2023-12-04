import { Box } from '@mui/material';
import React from 'react';
import CardInfo from './CardInfo';
import CardManual from './CardManual';

export default function ManualIndex() {
  const card = [];
  let obj = {};
  obj.alt = '';
  obj.title = '에어리어 정보 위치';
  obj.content = '메뉴 > 소지품 > 에어리어 아이템 > 효과 확인';
  obj.imgSrc = require('../../assets/manual/app/area_2.png');
  card.push(obj);

  obj = {};
  obj.alt = '';
  obj.title = '캐릭터 랭크 정보 위치';
  obj.content = '메뉴 > 프로필 > 기본 프로필 > 오른쪽 화살표 > 캐릭터 랭크';
  obj.imgSrc = require('../../assets/manual/app/profile_2.png');
  card.push(obj);

  obj = {};
  obj.alt = '';
  obj.title = '칭호 보너스 정보 위치';
  obj.content = '메뉴 > 프로필 > 기본 프로필 > 칭호 > 종합 능력치 보너스';
  obj.imgSrc = require('../../assets/manual/app/profile_1_1.png');
  card.push(obj);

  let i = 0;
  const content = card.map((c) => {
    i = i + 1;
    return (
      <CardInfo
        key={i}
        alt={c.alt}
        imgSrc={c.imgSrc}
        title={c.title}
        content={c.content}
        imgContent={c.imgContent}
      />
    );
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ flexWrap: 'wrap' }}
    >
      {content}
      <CardManual />
    </Box>
  );
}
