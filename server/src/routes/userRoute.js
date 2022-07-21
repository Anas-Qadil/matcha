const express = require("express");
const router = express.Router();
const { getAllUsers, getUser, updateUser, deleteUser } = require("../controllers/usersController")


router.get("/", getAllUsers);

router.get("/:username", getUser);

router.put("/:username", updateUser);

router.delete("/:username", deleteUser);

module.exports = router;
