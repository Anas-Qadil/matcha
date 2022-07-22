const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

const loginController = asyncHandler(async(req, res) => {

    const user = req.body;

    const getUser = await userModel.findOne({email : user.email});
    if (!getUser){
        res.status(404);
        throw new Error ("Invalid Email");
    }

    const match = await bcrypt.compare(user.password, getUser.password);
    if (!match) {
        res.status(404);
        throw new Error("Invalid Password");
    }

    res.status(200).send({
        message : "user found",
        user : getUser
    });

});

module.exports = loginController;



