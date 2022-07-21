const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/usersModel");
const registerController = require("../controllers/registerController");
const registerMiddleware = require("../middlewares/registerMiddleware");

router.post("/", registerMiddleware, registerController);

module.exports = router;