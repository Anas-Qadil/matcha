const express = require("express");
const AsyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const getToken = require("../utils/getToken");

const protectUserAcessMiddleware = AsyncHandler(async(req, res, next) => {

    const user = req.user;
    const searchedUser = req.user.username;

    if (user.username !== searchedUser){
        res.status(400);
        throw new Error("You Don't Have Access To This User")
    }
    next();

});

module.exports = protectUserAcessMiddleware;