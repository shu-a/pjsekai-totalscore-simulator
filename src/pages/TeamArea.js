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

export default function TeamArea() {
  const [affiliation, setAffiliation] = React.useState('');
  const [team, setTeam] = React.useState('');
  const [character, setCharacter] = React.useState('');
  const [star, setStar] = React.useState('');

  const handleChangeAffiliation = (event) => {
    setAffiliation(event.target.value);
  }
  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
  }
  const handleChangeCharacter = (event) => {
    setCharacter(event.target.value);
  }
  const handleChangeStar = (event) => {
    setStar(event.target.value);
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 275, paddingBottom: 2, marginTop: 3 }}>
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
        <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">소속</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={affiliation}
            onChange={handleChangeAffiliation}
            label="캐릭터 소속"
          >
            {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
            <MenuItem value={1}>Leo/need</MenuItem>
            <MenuItem value={2}>More More Jump</MenuItem>
            <MenuItem value={3}>Vivid Bad Squad</MenuItem>
            <MenuItem value={4}>원더랜드 쇼타임</MenuItem>
            <MenuItem value={5}>25시, 나이트 코드에서</MenuItem>
            <MenuItem value={6}>Virtual Singer</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">팀</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={team}
            onChange={handleChangeTeam}
            label="캐릭터 팀"
          >
            {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
            <MenuItem value={1}>Leo/need</MenuItem>
            <MenuItem value={2}>More More Jump</MenuItem>
            <MenuItem value={3}>Vivid Bad Squad</MenuItem>
            <MenuItem value={4}>원더랜드 쇼타임</MenuItem>
            <MenuItem value={5}>25시, 나이트 코드에서</MenuItem>
            <MenuItem value={6}>Virtual Singer</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">성급</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={star}
            onChange={handleChangeStar}
            label="소속"
          >
            {/* <MenuItem value="">
                <em>선택</em>
              </MenuItem> */}
            <MenuItem value={1}>4</MenuItem>
            <MenuItem value={2}>3</MenuItem>
            <MenuItem value={3}>2</MenuItem>
            <MenuItem value={4}>1</MenuItem>
            <MenuItem value={5}>생일</MenuItem>
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
            <MenuItem value={1}>이치카</MenuItem>
            <MenuItem value={2}>사키</MenuItem>
            <MenuItem value={3}>호나미</MenuItem>
            <MenuItem value={4}>시호</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-number"
          required
          label="Performance"
          defaultValue=""
          variant="standard"
          sx={{ width: 256, marginTop: 1 }}
        />
        <TextField
          className="textField"
          required
          id="standard-required"
          label="Technique"
          defaultValue=""
          variant="standard"
          sx={{ width: 256, marginTop: 1 }}
        />
        <TextField
          className="textField"
          required
          id="standard-required"
          label="Stamina"
          defaultValue=""
          variant="standard"
          sx={{ width: 256, marginTop: 1 }}
        />
      </React.Fragment>
    </Card>
  );
}