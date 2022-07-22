const express = require("express");
const mail = require("../services/mail");

const mailRoute = (req, res) => {
    
    mail();
    res.send("e");
}

module.exports = mailRoute;