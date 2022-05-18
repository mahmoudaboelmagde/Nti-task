const fs = require("fs");
const writeToJson = (data, fileName) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
  } catch (e) {
    console.log(e.message);
  }
};
const readFromJson = (fileName) => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync(fileName));
    if (!Array.isArray(data)) throw new Error();
  } catch {
    data = [];
  }
  return data;
};

module.exports = {
  writeToJson,
  readFromJson,
};
