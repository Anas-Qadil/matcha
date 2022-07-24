const express = require("express");
const asyncHandler = require("express-async-handler");
const SendForgotPasswordMail = require("../services/forgotPasswordService");
const validator = require("validator");
const userModel = require("../models/usersModel");

const forgotPasswordController = asyncHandler(async(req, res) => {

    const email = req.body.email;
    
    if (!validator.isEmail(email))
    {
        res.status(400);
        throw new Error("This Is Not An Email");
    }
    const checkIfExists = await userModel.findOne({email : email});
    if (!checkIfExists)
    {
        res.status(404);
        throw new Error("Email Does Not Exists");
    }
    SendForgotPasswordMail(email);
    res.status(200).send({
        message : "Success"
    });

});

module.exports = forgotPasswordController;