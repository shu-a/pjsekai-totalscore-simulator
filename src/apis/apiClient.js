import axios from 'axios';

// 팀 목록 불러오기
export async function getTeamList() {
  try {
    const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/unitProfiles.json');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// 캐릭터 목록 불러오기
export async function getCharacterList() {
  try {
    const response = await axios.get('https://shu-a.github.io/sekai-master-db-kr-diff/gameCharacters.json');
    const data = [...response.data];
    for (let i = 0; i < data.length; i++) {
      let c = data[i];
      c.fullName = c.firstName ? c.firstName + c.givenName : '' + c.givenName;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

// 별 목록 불러오기
export async function getRaritiesList() {
  try {
    const response = await axios.get('https://shu-a.github.io/sekai-master-db-diff/cardRarities.json');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// 속성 목록 불러오기
export function getAttrList() {
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
    return attrList;
  }