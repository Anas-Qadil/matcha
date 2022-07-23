const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../models/usersModel");

router.get("/", async (req, res) => {

    const hashedUsername = req.query.cryptedUsername;
    const users = await userModel.find();
    users.map(async (data) => {
        const match = await bcrypt.compare(data.username, hashedUsername);
        if (match === true)
        {
            userModel.updateOne({username : data.username}, {isEmailConfirmed : true}, (err, docs) => {
                if (!err)
                    console.log(data.username);
            });
        }
    });
    res.send("confirmed");
})

module.exports = router;