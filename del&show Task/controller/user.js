const chalk = require("chalk");
const dealWithJson = require("./dealWithJson");


const addUser = (userData) => {
  const data = dealWithJson.readData(); 
  data.push(userData);
  dealWithJson.writeData(data);
};


const allUsers = () => {
  return dealWithJson.readData();
};


const showUser = (id) => {
  const allData = dealWithJson.readData();
  let showData;
  for (let data of allData) {
    if (data.id === id) {
      showData = data;
    }
  }
  if (showData === undefined) {
    return console.log(chalk.red("no data"));
  }
  console.log(showData, chalk.green("all data"));
};


const delUser = (id) => {
  const allData = dealWithJson.readData();

  let delData;
  allData.forEach((data, i) => {
    if (data.id === id) {
      delData = i;
      console.log(i);
    }
  });
  if (delData) {
    allData.splice(delData, 1);
    dealWithJson.writeData(allData);
  } else {
    console.log(chalk.red("no Data"));
  }
};

const editUser = (id) => {
  const allData = dealWithJson.readData();
  let showData;
  allData.forEach((data, i) => {
    if (data.id === id) {
      showData = [data, i];
    }
  });
  if (showData === undefined) {
    return console.log(chalk.red("no data"));
  } else {
    return showData;
  }
};

module.exports = {
  addUser,
  editUser,
  allUsers,
  showUser,
  delUser,
};
