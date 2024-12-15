const DB = require("./db.json");
//to make avaialble some fkiles we use require keyword
//DB - standard way for db

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };
//for accessing workouts in db.json 