const express = require("express");  //library

const bodyParser = require("body-parser");
const workoutRouter = require("./routes/workoutRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

//able to receive the JSON data inside our controllers under req.body.
app.use(bodyParser.json());
app.use("/api/workouts", workoutRouter);


app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

//localhost:3000/api/workouts/345 
//i - install 