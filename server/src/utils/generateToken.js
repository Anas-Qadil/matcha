const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");


const generateToken = (username) => {
    const SECRET_KEY = process.env.TOKEN_SECRET;
    const token = jwt.sign(username, SECRET_KEY, {expiresIn : '1800s'});
    return (token);
}

module.exports = generateToken;