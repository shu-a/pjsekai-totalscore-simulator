import React, { useState, useEffect, Fragment } from 'react';
import MakeCardList from '../components/MakeCardList';
import { getTeamList, getCharacterList, getRaritiesList, getAttrList } from '../apis/apiClient'

export default function CardList() {
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
  const cardContents = [
    { title: 'Reader', idx: 1, color: '#ed5fab', border: 2 },
    { title: 'SubReader', idx: 2, color: '#6fc6bd', border: 2 },
    { title: 'Member1', idx: 3, color: '#444564', border: 2 },
    { title: 'Member2', idx: 4, color: '#444564', border: 2 },
    { title: 'Member3', idx: 5, color: '#444564', border: 2 }
  ];
  const cardList = [];
  const makeCardList = cardContents.map((c) =>
    <MakeCardList teamList={teamList} attrList={attrList} characterList={characterList} raritiesList={raritiesList} title={c.title} key={c.idx} border={c.border}
    color={c.color} />
  );
  cardList.push(makeCardList);

  return (
    <Fragment>
      {cardList}
    </Fragment>
  );
}