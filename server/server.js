const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./src/configs/db");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/userRoute");
const registerRouter = require("./src/routes/registerRoute")
const loginRoute = require("./src/routes/loginRoute");
const userModel = require("./src/models/usersModel");

const PORT  = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/login", loginRoute);
app.use("/api/register", registerRouter);

const user = new userModel({
    firstName : "anas<",
    lastname : "Qadil",
    username : "Segfault12<",
    password : "ansad12",
    age : 20,
    email : "a0@gmail.com",
    gender : "male",
    sexualPref : "female",
    biography : "developer",
    interests : "music",
    fameRating : 10,
})

const play = 0
if (play == 1)
{
    user.save((err) => {
        if (err)
            console.log(err.message)
        else
            console.log("saved"); 
    })
}


app.listen(PORT, (err) => {
    if (err)
        console.log(err);
    else
        console.log(`server is up and running on Port ${PORT}`);
});
