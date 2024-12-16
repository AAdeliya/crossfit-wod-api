const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), { //2 spaces before id, name, mode, equiment ..
    encoding: "utf-8", //utf - english standard 
  });
};

module.exports = { saveToDatabase };