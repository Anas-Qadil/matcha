const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/usersModel");

router.get("/", (req, res) => {
    if (Object.keys(req.body) == 0)
        res.status(400).send({
            message : "Invalide User Informations"
    });
    else
    {
        const save = async (user) => {
        try{
            await user.save((err, user) => {
                if (!err)
                {
                    res.status(401).send({
                        message : "User Created Successfully",
                        user : user
                    })
                }
            });
        }
        catch(e)
        {
            res.status(500).send({
                message : "Error While Creating The User",
                error : e
            })
        }
        }
        bcrypt.hash(req.body.password, 10)
            .then((pw) => {
                req.body.password = pw;
                const user = new userModel(req.body);
                save(user);
            })
            .catch((e) => {
                res.status(500).send({
                    message : "Password Was not Hashed Successfully",
                    e,
                });
            });
    }
    
})

module.exports = router;