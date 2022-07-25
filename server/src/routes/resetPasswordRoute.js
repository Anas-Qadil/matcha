const express = require("express");
const userModel = require("../models/usersModel");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {resetPasswordController, newPasswordController} = require("../controllers/resetPasswordController");

router.post("/", resetPasswordController);
router.put("/", newPasswordController);

module.exports = router;