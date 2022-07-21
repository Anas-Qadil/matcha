const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");

const loginController = asyncHandler(async(req, res) => {

    const user = await userModel.findOne({username : "role"});

    res.send(user);
});

module.exports = loginController;



