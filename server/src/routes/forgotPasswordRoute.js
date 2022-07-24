const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const forgotPasswordController = require("../controllers/forgotPasswordRouteController");

router.post("/", forgotPasswordController);

module.exports = router;