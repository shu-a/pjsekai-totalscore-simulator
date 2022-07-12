import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { flexbox } from '@mui/system';
import axios from 'axios';

export default function CardList() {
  const [teamList, setTeamList] = React.useState([]);
  const [teamLoad, setTeamLoad] = React.useState('N');
  const getTeamList = async () => {
    if (teamLoad === 'N') {
      try {
        const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/unitProfiles.json');
        setTeamList(response.data);
        setTeamLoad('Y');
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (teamLoad === 'N')
    getTeamList();

  const [characterList, setCharacterList] = React.useState([]);
  const [characterLoad, setCharacterLoad] = React.useState('N');
  const getCharacterList = async () => {
    if (characterLoad === 'N') {
      try {
        const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/gameCharacters.json');
        setCharacterList(response.data);
        setCharacterLoad('Y');
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (characterLoad === 'N')
    getCharacterList();

  const [attrList, setAttrList] = React.useState([]);
  const [attrLoad, setAttrLoad] = React.useState('N');
  const getAttrList = () => {
    if (attrLoad === 'N') {
      const attrList = [{
        "seq": 46,
        "areaItemId": 46,
        "level": 1,
        "targetUnit": "any",
        "targetCardAttr": "cool",
        "unit": "cool",
        "unitName": "쿨"
      },
      {
        "seq": 48,
        "areaItemId": 48,
        "level": 1,
        "targetUnit": "any",
        "targetCardAttr": "cute",
        "unit": "cute",
        "unitName": "큐트"
      },
      {
        "seq": 50,
        "areaItemId": 50,
        "level": 1,
        "targetUnit": "any",
        "targetCardAttr": "pure",
        "unit": "pure",
        "unitName": "퓨어"
      },
      {
        "seq": 52,
        "areaItemId": 52,
        "level": 1,
        "targetUnit": "any",
        "targetCardAttr": "happy",
        "unit": "happy",
        "unitName": "해피"
      },
      {
        "seq": 54,
        "areaItemId": 54,
        "level": 1,
        "targetUnit": "any",
        "targetCardAttr": "mysterious",
        "unit": "mysterious",
        "unitName": "미스테리어스"
      }];
      setAttrList(attrList);
      setAttrLoad('Y');
    }
  }
  if (attrLoad === 'N')
    getAttrList();

  const [raritiesList, setRaritiesList] = React.useState([]);
  const [raritiesLoad, setRaritiesLoad] = React.useState('N');
  const getRaritiesList = async () => {
    if(raritiesLoad === 'N') {
      const response = await axios.get('https://shu-a.github.io/sekai-master-db-diff/cardRarities.json');
      setRaritiesList(response.data);
      setRaritiesLoad('Y');
    }
  }
  if (raritiesLoad === 'N')
    getRaritiesList();

  const _attrList = [];
  for (let i = 0; i < attrList.length; i++) {
    let attr = attrList[i];
    _attrList.push(<MenuItem key={'attr_' + attr.seq} value={'attr_' + attr.seq}>{attr.unitName}</MenuItem>);
  }

  const affiliationList = [];
  for (let i = 0; i < teamList.length; i++) {
    let team = teamList[i];
    affiliationList.push(<MenuItem key={'affiliation_' + team.unit} value={'affiliation_' + team.unit}>{team.unitName}</MenuItem>);
  }

  const _teamList = [];
  for (let i = 0; i < teamList.length; i++) {
    let team = teamList[i];
    if (Number(team.seq) !== 1)
      _teamList.push(<MenuItem key={'team_' + team.unit} value={'team_' + team.unit}>{team.unitName}</MenuItem>);
  }

  const _raritiesList = [];
  for (let i = 0; i < raritiesList.length; i++) {
    let rarities = raritiesList[i];
    _raritiesList.push(<MenuItem key={'rarities_' + rarities.seq} value={'rarities_' + rarities.seq}>{rarities.cardRarityType}</MenuItem>);
  }
  
  const _characterList = [];
  const [__characterList, __setCharacterList] = React.useState([]);

  const [attr, setAttr] = React.useState('');
  const [affiliation, setAffiliation] = React.useState('');
  const [team, setTeam] = React.useState('');
  const [character, setCharacter] = React.useState('');
  const [rarities, setRarities] = React.useState('');

  const handleChangeAttr = (event) => {
    setAttr(event.target.value);
  }
  const handleChangeAffiliation = (event) => {
    setAffiliation(event.target.value);
  }
  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
    for (let i = 0; i < characterList.length; i++) {
      let character = characterList[i]
      let characterName = character.firstName ? character.firstName + ' ' + character.givenName : character.givenName;
      if (event.target.value === ('team_' + character.unit))
        _characterList.push(<MenuItem key={'character_' + character.id} value={'character_' + character.id}>{characterName}</MenuItem>);        
        __setCharacterList(_characterList);
    }
  }
  const handleChangeCharacter = (event) => {
    setCharacter(event.target.value);
  }
  const handleChangeRarities = (event) => {
    setRarities(event.target.value);
  }

  return (
    <div>
      {/* <Box sx={{ maxWidth: 275 }}> */}
        {/* <Card variant="outlined">{card}</Card> */}
        <Card variant="outlined" sx={{ minWidth:300, maxWidth: 300, paddingBottom: 2, margin: 0.5, marginTop: 3, display: flexbox }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Reader"
            // subheader=""
          />
          <React.Fragment>
            <FormControl variant="standard" sx={{ m: 1, width: 256 }}>
              <InputLabel id="attr">속성</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="attr"
                value={attr}
                onChange={handleChangeAttr}
                label="속성"
              >
                {_attrList}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="affiliation">소속</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={affiliation}
                onChange={handleChangeAffiliation}
                label="캐릭터 소속"
              >
                {affiliationList}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">팀</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="team"
                value={team}
                onChange={handleChangeTeam}
                label="캐릭터 팀"
              >
                {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
                {_teamList}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">성급</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={rarities}
                onChange={handleChangeRarities}
                label="성급"
              >
                {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
                {_raritiesList}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">캐릭터명</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={character}
                onChange={handleChangeCharacter}
                label="캐릭터명"
              >
                {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
                {__characterList}
              </Select>
            </FormControl>
            <TextField
              id="performance"
              required
              label="Performance"
              defaultValue=""
              variant="standard"
              type="number"
              sx={{ width: 256, marginTop: 1 }}
            />
            <TextField
              className="textField"
              required
              id="tecchnique"
              label="Technique"
              defaultValue=""
              variant="standard"
              type="number"
              sx={{ width: 256, marginTop: 1 }}
            />
            <TextField
              className="textField"
              required
              id="stamina"
              label="Stamina"
              defaultValue=""
              variant="standard"
              type="number"
              sx={{ width: 256, marginTop: 1 }}
            />
          </React.Fragment>
        </Card>
      {/* </Box> */}
    </div>
  );
}