export const talantScore = (event) => {
  const formData = new FormData(event.currentTarget);
  let characterArea = {};
  let characterRank = {};
  let teamArea = {};
  let attrArea = {};
  let reader = {};
  let subReader = {};
  let member1 = {};
  let member2 = {};
  let member3 = {};
  for (let key of formData.keys()) {
    let id = key.split('_')[0];
    let value = formData.get(key);
    if (id === 'teamArea') {
      teamArea = { ...teamArea, [key]: value }
      if (!value) {
        document.getElementById(key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'attrArea') {
      attrArea = { ...attrArea, [key]: value }
      if (!value) {
        document.getElementById(key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (key === 'titleBonus') {
      if (!value) {
        document.getElementById(key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'characterArea') {
      characterArea = { ...characterArea, [key]: value }
      if (!value) {
        document.getElementById(key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'characterRank') {
      characterRank = { ...characterRank, [key]: value }
      if (!value) {
        document.getElementById(key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'Reader') {
      reader = { ...reader, [key]: value }
      if (!value) {
        if (key === id + '_performance' || key === id + '_stamina' || key === id + '_technique')
          document.getElementById(key).focus();
        else
          document.getElementById('mui-component-select-' + key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'SubReader') {
      subReader = { ...subReader, [key]: value }
      if (!value) {
        if (key === id + '_performance' || key === id + '_stamina' || key === id + '_technique')
          document.getElementById(key).focus();
        else
          document.getElementById('mui-component-select-' + key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'Member1') {
      member1 = { ...member1, [key]: value }
      if (!value) {
        if (key === id + '_performance' || key === id + '_stamina' || key === id + '_technique')
          document.getElementById(key).focus();
        else
          document.getElementById('mui-component-select-' + key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'Member2') {
      member2 = { ...member2, [key]: value }
      if (!value) {
        if (key === id + '_performance' || key === id + '_stamina' || key === id + '_technique')
          document.getElementById(key).focus();
        else
          document.getElementById('mui-component-select-' + key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    } else if (id === 'Member3') {
      member3 = { ...member3, [key]: value }
      if (!value) {
        if (key === id + '_performance' || key === id + '_stamina' || key === id + '_technique')
          document.getElementById(key).focus();
        else
          document.getElementById('mui-component-select-' + key).focus();
        alert("값을 입력해주세요.");
        return false;
      }
    }
  }
  const cardData = {}
  cardData.characterArea = characterArea;
  cardData.characterRank = characterRank;
  cardData.teamArea = teamArea;
  cardData.attrArea = attrArea;
  cardData.reader = reader;
  cardData.subReader = subReader;
  cardData.member1 = member1;
  cardData.member2 = member2;
  cardData.member3 = member3;
  cardData.bonus = formData.get('titleBonus');
  // console.log('talant: ', talantScoreCalc(cardData));
  return talantScoreCalc(cardData);
}

export const talantScoreCalc = (props) => {
  // console.log(props);
  const readerTeam = props.reader.Reader_team;
  const subReaderTeam = props.subReader.SubReader_team;
  const member1Team = props.member1.Member1_team;
  const member2Team = props.member2.Member2_team;
  const member3Team = props.member3.Member3_team;
  const readerSubUnit = props.reader.Reader_subUnit;
  const subReaderSubUnit = props.subReader.SubReader_subUnit;
  const member1SubUnit = props.member1.Member1_subUnit;
  const member2SubUnit = props.member2.Member2_subUnit;
  const member3SubUnit = props.member3.Member3_subUnit;
  const readerAttr = props.reader.Reader_attr;
  const subReaderAttr = props.subReader.SubReader_attr;
  const member1Attr = props.member1.Member1_attr;
  const member2Attr = props.member2.Member2_attr;
  const member3Attr = props.member3.Member3_attr;
  let teamBonus = 'none';
  if (readerTeam === subReaderTeam && readerTeam === member1Team && readerTeam === member2Team && readerTeam === member3Team) {
    teamBonus = 'piapro'
  } else if (readerSubUnit === subReaderSubUnit && readerSubUnit === member1SubUnit && readerSubUnit === member2SubUnit && readerSubUnit === member3SubUnit) {
    teamBonus = 'unit';
  }
  let attrBonus = 'N';
  if (readerAttr === subReaderAttr && readerAttr === member1Attr && readerAttr === member2Attr && readerAttr === member3Attr)
    attrBonus = 'Y';

  const reader = memberBonus(props.reader, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus);
  const subReader = memberBonus(props.subReader, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus);
  const member1 = memberBonus(props.member1, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus);
  const member2 = memberBonus(props.member2, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus);
  const member3 = memberBonus(props.member3, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus);
  const totalScore = {};
  totalScore.totalScore = reader.resultBonus + subReader.resultBonus + member1.resultBonus + member2.resultBonus + member3.resultBonus + Number(props.bonus);
  totalScore.titleBonus = Number(props.bonus);
  totalScore.areaBonus = reader.cAreaBonus + subReader.cAreaBonus + member1.cAreaBonus + member2.cAreaBonus + member3.cAreaBonus;
  totalScore.rankBonus = reader.cRankBonus + subReader.cRankBonus + member1.cRankBonus + member2.cRankBonus + member3.cRankBonus;
  totalScore.ptsScore = totalScore.totalScore - totalScore.titleBonus - totalScore.areaBonus - totalScore.rankBonus;
  return totalScore;
}

const memberBonus = (card, characterArea, characterRank, teamArea, attrArea, teamBonus, attrBonus) => {
  let performance = 0;
  let technique = 0;
  let stamina = 0;
  let characterAreaBonus = 0;
  let characterRankBonus = 0;
  let subUnitAreaBonus = 0;
  let teamAreaBonus = 0;
  let attrAreaBonus = 0;
  let areaBonus = 0;
  let vsingerUnit = 'N';
  for (let key in card) {
    let cardId = key.substring(key.indexOf('_') + 1);
    let cardValue = card[key];
    if (cardId === 'performance')
      performance = Number(cardValue);
    if (cardId === 'technique')
      technique = Number(cardValue);
    if (cardId === 'stamina')
      stamina = Number(cardValue);
    if (cardId === 'character') {
      for (let subKey in characterArea) {
        let subId = subKey.substring(subKey.indexOf('_') + 1)
        let subValue = characterArea[subKey];
        if (subId === cardValue) {
          characterAreaBonus = Number(subValue);
          break;
        }
      }
      for (let subKey in characterRank) {
        let subId = subKey.substring(subKey.indexOf('_') + 1)
        let subValue = characterRank[subKey];
        if (subId === cardValue) {
          characterRankBonus = Number(subValue);
          break;
        }
      }
    }
    if (cardId === 'subUnit' || cardId === 'team') {
      if (cardId === 'subUnit')
        vsingerUnit = cardValue === 'piapro' ? 'Y' : 'N';
      for (let subKey in teamArea) {
        let subId = subKey.substring(subKey.indexOf('_') + 1)
        let subValue = teamArea[subKey];
        if (subId === cardValue) {
          if (cardId === 'subUnit') {
            subUnitAreaBonus = Number(subValue);
            break;
          } else if (cardId === 'team') {
            teamAreaBonus = Number(subValue);
            break;
          }
        }
      }
    }
    if (cardId === 'attr') {
      for (let subKey in attrArea) {
        let subId = subKey.substring(subKey.indexOf('_') + 1)
        let subValue = attrArea[subKey];
        if (subId === cardValue) {
          attrAreaBonus = Number(subValue);
          break;
        }
      }
    }
  }
  // 팀 보너스 계산
  if (teamBonus === 'piapro') {
    if (vsingerUnit === 'Y')
      teamAreaBonus += teamAreaBonus;
    else
      teamAreaBonus = teamAreaBonus > subUnitAreaBonus ? teamAreaBonus : subUnitAreaBonus
  } else if (teamBonus === 'unit') {
    subUnitAreaBonus += subUnitAreaBonus;
    teamAreaBonus = subUnitAreaBonus;
  } else
    teamAreaBonus = teamAreaBonus > subUnitAreaBonus ? teamAreaBonus : subUnitAreaBonus
  // 속성 보너스 계산
  if (attrBonus === 'Y')
    attrAreaBonus += attrAreaBonus;

  areaBonus = characterAreaBonus + teamAreaBonus + attrAreaBonus;
  const value = {};
  value.performance = performance;
  value.technique = technique;
  value.stamina = stamina;
  value.rankBonus = characterRankBonus;
  value.areaBonus = areaBonus;

  const cAreaBonus = getBonus(value, 'area');
  const cRankBonus = getBonus(value, 'rank');
  const resultBonus = {};
  resultBonus.resultBonus = cAreaBonus + cRankBonus + performance + technique + stamina;
  resultBonus.cAreaBonus = cAreaBonus;
  resultBonus.cRankBonus = cRankBonus;

  return resultBonus;
}

const getPerformanceBonus = (props, type) => {
  const bonus = Math.floor(Number(props.performance) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  return bonus;
}

const getTechniqueBonus = (props, type) => {
  const bonus = Math.floor(Number(props.technique) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  return bonus;
}

const getStaminaBonus = (props, type) => {
  const bonus = Math.floor(Number(props.stamina) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  return bonus;
}

const getBonus = (props, type) => {
  const bonus = getPerformanceBonus(props, type) + getTechniqueBonus(props, type) + getStaminaBonus(props, type);
  return bonus;
}