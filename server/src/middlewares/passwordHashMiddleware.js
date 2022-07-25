const express = require("express");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const passwordHashMiddleware = asyncHandler(async(req, res, next) => {

    const userInfo = req.body;
    
    if (userInfo.password !== undefined)
        req.body.password = await bcrypt.hash(userInfo.password, 10);
    next();

});

module.exports = passwordHashMiddleware;