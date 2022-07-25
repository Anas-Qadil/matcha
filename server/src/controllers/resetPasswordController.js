const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const validator = require("validator");
const bcrypt = require("bcrypt");

const resetPasswordController = asyncHandler(async(req, res) => {

    const email = req.body.email;
    const code = req.body.code;

    if (!validator.isEmail(email))
    {
        res.status(400);
        throw new Error("Invalid Email");
    }
    const user = await userModel.findOne({email : email});
    if (!user)
    {
        res.status(404);
        throw new Error("Email Not Found");
    }
    if (parseInt(user.passwordResetCode) !== parseInt(code))
    {
        res.status(400);
        throw new Error ("Invalide Code");
    }
    user.passwordResetCode = 0;
    await user.save();
    res.status(200).send({
        message : "success"
    });
});

const newPasswordController = asyncHandler(async(req, res) => {

    const email = req.body.email;
    if (!validator.isEmail(email) || req.body.password === "" || !req.body.password)
    {
        res.status(400);
        new Error("invalid email or passowrd");
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await userModel.findOne({email});
    user.password = password;
    await user.save();
    res.status(200).send({
        message : "success"
    });
})

module.exports = {
    resetPasswordController,
    newPasswordController
};