const express = require("express");
const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel");

const authenticateTokenMiddelware = AsyncHandler(async(req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const SECRET_KEY = process.env.TOKEN_SECRET;

    if (token == null){
        res.status(400);
        throw new Error("Invalid Token");
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err){
            res.status(400);
            throw new Error("An Error Has Occured");
        }
        req.user = user;
    });
    const DBUser = await userModel.findOne({username : req.user.username});
    if (!DBUser){
        res.status(400);
        throw new Error("The Owner Of This Token Is No Longer Exists!!");
    }
    next();

})

module.exports = authenticateTokenMiddelware;