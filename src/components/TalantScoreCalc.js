export const createMsg = (message) => {
  return console.log(message);
}

export const validation = (array, maxIdx, message) => {
  let idx = array.length - 1;
  if (idx === maxIdx - 1) {
    if (!array[idx].value) {
      createMsg(message);
      document.getElementById(array[idx].id).focus();
      return false;
    } else {
      return true;
    }
  } else {
    createMsg(message);
    document.getElementById(array[idx].id).focus();
    return false;
  }
}

// 테스트중
export const talantScoreCalc = (props) => {
  console.log(props);
  
  const readerSubUnit = props.reader.Reader_subUnit;
  const subReaderSubUnit = props.subReader.SubReader_subUnit;
  const member1SubUnit = props.member1.Member1_subUnit;
  const member2SubUnit = props.member2.Member2_subUnit;
  const member3SubUnit = props.member3.Member3_subUnit;
  const readerTeam = props.reader.Reader_team;
  const subReaderTeam = props.subReader.SubReader_team;
  const member1Team = props.member1.Member1_team;
  const member2Team = props.member2.Member2_team;
  const member3Team = props.member3.Member3_team;
  const readerAttr = props.reader.Reader_attr;
  const subReaderAttr = props.subReader.SubReader_attr;
  const member1Attr = props.member1.Member1_attr;
  const member2Attr = props.member2.Member2_attr;
  const member3Attr = props.member3.Member3_attr;
  let teamBonus = 'none';
  if (readerTeam === subReaderTeam && readerTeam === member1Team &&
    readerTeam === member2Team && readerTeam === member3Team) {
      if (readerTeam === 'piapro')
        teamBonus = 'piapro';
      else
        teamBonus = 'unit';
  } else if (readerSubUnit === subReaderSubUnit && readerSubUnit === member1SubUnit && readerSubUnit === member2SubUnit && readerSubUnit === member3SubUnit) {
    teamBonus = 'unit';
  }
  let attrBonus = 'N';
  if (readerAttr === subReaderAttr && readerAttr === member1Attr && readerAttr === member2Attr && readerAttr === member3Attr)
    attrBonus = 'Y';
    
  return (
    memberBonus(props.reader, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus) +
    memberBonus(props.subReader, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus) +
    memberBonus(props.member1, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus) +
    memberBonus(props.member2, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus) +
    memberBonus(props.member3, props.characterArea, props.characterRank, props.teamArea, props.attrArea, teamBonus, attrBonus) + Number(props.bonus)
  );
}

const memberBonus = (obj, characterArea, characterRank, teamArea, attrArea, teamBonus, attrBonus) => {
  let performance = 0;
  let technique = 0;
  let stamina = 0;
  let characterAreaBonus = 0;
  let characterRankBonus = 0;
  let subUnitAreaBonus = 0;
  let teamAreaBonus = 0;
  let attrAreaBonus = 0;
  let areaBonus = 0;
  for (let key in obj) {
    let cardId = key.substring(key.indexOf('_') + 1);
    let cardValue = obj[key];
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
  if (teamBonus === 'piapro') {
    if (subUnitAreaBonus > teamAreaBonus)
      teamAreaBonus = subUnitAreaBonus;
  } else if (teamBonus === 'unit')
    subUnitAreaBonus += subUnitAreaBonus;
  else
    if (subUnitAreaBonus > teamAreaBonus)
      teamAreaBonus = subUnitAreaBonus;
  if (attrBonus === 'Y')
    attrAreaBonus += attrAreaBonus;

  console.log('===teamBonus', teamBonus)
  console.log('===attrBonus', attrBonus)
  console.log('area', characterAreaBonus, 'rank', characterRankBonus, 'team', teamAreaBonus, 'attr', attrAreaBonus)
  areaBonus = characterAreaBonus + teamAreaBonus + attrAreaBonus;
  const value = {};
  value.performance = performance;
  value.technique = technique;
  value.stamina = stamina;
  value.rankBonus = characterRankBonus;
  value.areaBonus = areaBonus;
  console.log(performance, technique, stamina)
  return (
    getBonus(value, 'rank') + getBonus(value, 'area') + performance + technique + stamina
  );
}
const getPerformanceBonus = (props, type) => {
  const bonus = Math.floor(Number(props.performance) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  console.log('type', type);
  console.log('performance', bonus);
  return bonus;
}
const getTechniqueBonus = (props, type) => {
  const bonus = Math.floor(Number(props.technique) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  console.log('type', type);
  console.log('technique', bonus);
  return bonus;
}
const getStaminaBonus = (props, type) => {
  const bonus = Math.floor(Number(props.stamina) * Number(type === 'rank' ? props.rankBonus / 1000 : props.areaBonus / 100));
  console.log('type', type);
  console.log('stamina', bonus);
  return bonus;
}
const getBonus = (props, type) => {
  const bonus = getPerformanceBonus(props, type) + getTechniqueBonus(props, type) + getStaminaBonus(props, type);
  console.log('===bonus' + type, bonus)
  return bonus;
}