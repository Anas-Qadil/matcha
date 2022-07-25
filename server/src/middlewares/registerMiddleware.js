const express = require("express");
const userModel = require("../models/usersModel");
const asyncHandler = require("express-async-handler")

const registerMiddleware = asyncHandler(async(req, res, next) => {

    if (Object.keys(req.body) == 0)
    {
        res.status(400)
        throw new Error("Empty User Infos");
    }
    if (!req.body.firstname || !req.body.lastname || !req.body.username || !req.body.email || !req.body.password )
    {
        res.status(400);
        throw new Error("some registration fields are missing");
    }

    const user = await userModel.findOne({$or : [{username : req.body.username}, {email : req.body.email}]});
    if (user)
    {
        res.status(400);
        throw new Error("username or email are already taken");
    }
    next();
});

module.exports = registerMiddleware;