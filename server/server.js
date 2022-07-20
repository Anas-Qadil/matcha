const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./src/configs/db");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/userRoute");
const registerRouter = require("./src/routes/registerRoute")
const loginRoute = require("./src/routes/loginRoute");
const userModel = require("./src/models/usersModel");

const port  = process.env.PORT || 8000;

app.use("/api/users", usersRouter);
app.use("/api/login", loginRoute);

const user = new userModel({
    firstName : "anas",
    lastname : "Qadil",
    username : "Segfault12",
    age : 20,
    email : "a0@gmail.com",
    gender : "male",
    sexualPref : "female",
    biography : "developer",
    interests : "music",
    fameRating : 11,
})

const play = 1
if (play == 1)
{
    user.save((err) => {
        if (err)
            console.log(err.message)
        else
            console.log("saved"); 
    })
}


app.listen(port, (err) => {
    if (err)
        console.log(err);
    else
        console.log("server is up and running");
});
