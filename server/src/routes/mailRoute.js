const express = require("express");
const SendMail = require("../services/mail");

const mailRoute = (req, res) => {
    
    SendMail();
    res.send("e");
}

module.exports = mailRoute;