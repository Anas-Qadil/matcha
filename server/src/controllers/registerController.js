const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userModel = require("../models/usersModel");
const generateToken = require("../utils/generateToken");
const sendMail = require("../services/mail");

const registerController = asyncHandler(async(req, res) => {

    console.log(req.body);
    const token = generateToken({username : req.body.username});
    bcrypt.hash(req.body.password, 10)
        .then((pw) => {
            req.body.password = pw;
            const user = new userModel(req.body);
            user.save()
                .then((result) => {
                    const data = {
                        username : req.body.username,
                        email : req.body.email
                    }
                    console.log(data);
                    // sendMail();
                    res.status(201).send({
                        message : "User Created Successfully",
                        token : token
                    });
                })
                .catch(error => {
                    res.status(500).send({
                        message : "An Error Has Occured While Creating The User",
                        error : error
                    });
                })
        })
        .catch((e) => {
            res.status(500).send({
                message : "Password Was not Hashed Successfully",
                e,
            });
        });
});

module.exports = registerController;