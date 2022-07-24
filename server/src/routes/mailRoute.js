const express = require("express");
const SendMail = require("../services/mail");
const crypt = require("../utils/crypt");

const mailRoute = async(req, res) => {
    
    const data = {
        username :req.body.username,
        email : req.body.email
    }

    SendMail(data);
    res.send("e");
}

module.exports = mailRoute;