const express = require("express");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const validator = require("validator");

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

module.exports = resetPasswordController;