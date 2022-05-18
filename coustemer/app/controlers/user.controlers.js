const dealWithJson = require("../helper/dealWithJson");

//home page
const home = (req, res) => {
  const data = dealWithJson.readFromJson("database/userData.json");
  res.render("home", {
    data,
    hasData: data.length,
    pageTitle: "Home Page CustmerData",
  });
};

//add user
const addCoustmer = (req, res) => {
  res.render("addCoustmer", {
    transaction: [
      { transactionTypes: "add", value: 220 },
      { transactionTypes: "NoData", value: 208 },
      { transactionTypes: "No", value: 888 },
      { transactionTypes: "pull", value: 30 },
      "add",
      "value",
    ],
  });
};
const addCoustmerLogic = (req, res) => {
  const user = { accName: Date.now(), ...req.body };
  const data = dealWithJson.readFromJson("database/userData.json");
  console.log(user);
  data.push(user);
  dealWithJson.writeToJson(data, "database/userData.json");
  res.redirect("/");
};

//show userdata
const showUserData = (req, res) => {
  const data = dealWithJson
    .readFromJson("database/userData.json")
    .find((d) => d.accName == req.params.accName);
  res.render("showSinglUser", { data, pageTitle: "user Data" });
};

//delete data
const delUser = (req, res) => {
  const id = req.params.accName;
  const data = dealWithJson.readFromJson("database/userData.json");
  const afterDel = data.filter((d) => d.accName != req.params.accName);
  dealWithJson.writeToJson(afterDel, "database/userData.json");
  res.redirect("/");
};
//edite data
const editeUser = (req, res) => {
  const user = dealWithJson
    .readFromJson("database/userData.json")
    .find((d) => d.accName == req.params.accName);
  res.render("edite", {
    user,
    pageTitle: "Edite data",
    postTypes: ["t1", "t2", "t3"],
  });
};
const editeUserLogic = (req, res) => {
  const userIndex = dealWithJson
    .readFromJson("database/userData.json")
    .findIndex((d) => d.accName == req.params.accName);
  const data = dealWithJson.readFromJson("database/userData.json");
  data[userIndex] = { ...req.body, accName: data[userIndex].accName };
  dealWithJson.writeToJson(data, "database/userData.json");
  res.redirect("/");
};

module.exports = {
  home,
  addCoustmer,
  addCoustmerLogic,
  showUserData,
  delUser,
  editeUser,
  editeUserLogic,
};
