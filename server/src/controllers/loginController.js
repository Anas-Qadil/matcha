const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const loginController = asyncHandler(async(req, res) => {

    const user = req.body;

    const getUser = await userModel.findOne({email : user.email});
    if (!getUser){
        res.status(404);
        throw new Error ("Invalid Email");
    }
    if (!getUser.isEmailConfirmed)
    {
        res.status(400);
        throw new Error("Please Confirm Your Email");
    }
    const match = await bcrypt.compare(user.password, getUser.password);
    if (!match) {
        res.status(404);
        throw new Error("Invalid Password");
    }
    const token = generateToken({username : getUser.username});
    res.status(200).send({
        message : "Success",
        token : token
    });

});

module.exports = loginController;