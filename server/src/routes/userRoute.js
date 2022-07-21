const express = require("express");
const router = express.Router();
const { getAllUsers, getUser, updateUser } = require("../controllers/usersController")


router.get("/", getAllUsers);

router.get("/:username", getUser);

router.put("/:username", updateUser);

module.exports = router;
