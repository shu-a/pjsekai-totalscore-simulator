import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { flexbox } from '@mui/system';
import MakeFormSelect from '../components/MakeFormSelect';
import MakeCard from '../components/MakeCard';
import MakeTextField from '../components/MakeTextField';
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
  const cardList = (<MakeCardList teamList={teamList} attrList={attrList} characterList={characterList} raritiesList={raritiesList} />);

  return (
    <div>
      {cardList}
    </div>
  );
}