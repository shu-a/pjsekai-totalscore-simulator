import React, { useState, useEffect, Fragment } from 'react';
import CardContents from './CardContents';
import {
  getTeamList,
  getCharacterList,
  getRaritiesList,
  getAttrList,
} from '../../apis/apiClient';

export default function Card() {
  const [teamList, setTeamList] = useState([]);
  useEffect(() => {
    getTeamList().then((resData) => setTeamList(resData));
  }, []);
  const [attrList, setAttrList] = useState([]);
  useEffect(() => {
    setAttrList(getAttrList());
  }, []);
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    getCharacterList().then((resData) => setCharacterList(resData));
  }, []);
  const [raritiesList, setRaritiesList] = useState([]);
  useEffect(() => {
    getRaritiesList().then((resData) => setRaritiesList(resData));
  }, []);

  const cardInfo = [
    {
      title: 'Leader',
      idx: 1,
      color: '#ed5fab',
      backgroundColor: '#fffafd',
      border: 2,
      pb: 2,
    },
    {
      title: 'SubLeader',
      idx: 2,
      color: '#00b3a4',
      backgroundColor: '#faffff',
      border: 2,
      pb: 2,
    },
    {
      title: 'Member1',
      idx: 3,
      color: '#444564',
      backgroundColor: '#fafbff',
      border: 2,
      pb: 2,
    },
    {
      title: 'Member2',
      idx: 4,
      color: '#444564',
      backgroundColor: '#fafbff',
      border: 2,
      pb: 2,
    },
    {
      title: 'Member3',
      idx: 5,
      color: '#444564',
      backgroundColor: '#fafbff',
      border: 2,
      pb: 2,
    },
  ];

  const card = cardInfo.map((c) => (
    <CardContents
      key={c.idx}
      teamList={teamList}
      attrList={attrList}
      characterList={characterList}
      raritiesList={raritiesList}
      title={c.title}
      border={c.border}
      color={c.color}
      backgroundColor={c.backgroundColor}
    />
  ));

  return <Fragment>{card}</Fragment>;
}
