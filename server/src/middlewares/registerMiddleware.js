const express = require("express");
const userModel = require("../models/usersModel");
const asyncHandler = require("express-async-handler")

const registerMiddleware = asyncHandler(async(req, res, next) => {

    if (Object.keys(req.body) == 0)
    {
        res.status(400)
        throw new Error("Empty User Infos");
    }

    // check if email or username already exists
        //Here


    next();
});

module.exports = registerMiddleware;