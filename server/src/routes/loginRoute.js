const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const loginMiddleware = require("../middlewares/loginMiddleware");

router.post("/", loginMiddleware, loginController);

module.exports = router;