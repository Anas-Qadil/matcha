const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port  = process.env.PORT || 8000;


app.listen(port, (err) => {
    if (err)
        console.log(err);
    else
        console.log("server is up and running");
});
