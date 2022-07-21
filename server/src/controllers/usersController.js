const express = require("express");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const userModel = require("../models/usersModel")

const getAllUsers = asyncHandler(async (req, res) => {

    const users = await userModel.find();
    if (users === undefined || users.length == 0)
        throw new Error("Cannot Find Any Users");
    res.status(200).json({
        users : users
    });

});

const getUser = asyncHandler(async(req, res) => {
    
    const username = req.params.username;
    const user = await userModel.findOne({username : username})
    if (!user)
        throw new Error("User Not Found");
    res.status(200).json({
        user : user
    });

});

const updateUser = asyncHandler(async(req, res) => {

    const username = req.params.username;

    const user = await userModel.findOne({username : username});
    if (!user)
        throw new Error("User Not Found");
    const updatedUser = await userModel.findOneAndUpdate({username : username}, req.body, {
        returnDocument : 'after',
        new : true
    });
    res.status(200).send({
        user : updatedUser
    });

})

module.exports = {
    getAllUsers,
    getUser,
    updateUser
};