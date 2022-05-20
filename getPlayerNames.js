const getPlayerNames = (data) => {
  let nameArray = [];
  data.map((item) => {
    if (!nameArray.includes(item["winner"])) {
      nameArray.push(item["winner"]);
    }
    if (!nameArray.includes(item["loser"])) {
      nameArray.push(item["loser"]);
    }
  });
  return nameArray;
};

const myData = [
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 },
];

const result = getPlayerNames(myData);
console.log(result);

const getWinnerAgainstLosers = (myData) => {
  let resultObj = {};

  result.map((item) => {
    resultObj[item] = [];
    myData.map((eachItem) => {
      if (eachItem["winner"] === item) {
        resultObj[item].push(eachItem["loser"]);
      }
    });
  });
  console.log(resultObj);
  return resultObj;
};
getWinnerAgainstLosers(myData, getPlayerNames);
