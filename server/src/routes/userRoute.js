const express = require("express");
const router = express.Router();
const { getAllUsers, getUser, updateUser, deleteUser } = require("../controllers/usersController")
const authenticateTokenMiddelware = require("../middlewares/authenticateTokenMiddelware");
const asyncHandler = require("express-async-handler");

router.get("/", authenticateTokenMiddelware, getAllUsers);

router.get("/:username", authenticateTokenMiddelware, getUser);

router.put("/:username", authenticateTokenMiddelware, updateUser);

router.delete("/:username", authenticateTokenMiddelware, deleteUser);

router.all("/", asyncHandler((req, res) => {
    throw new Error("You Have No Access To This Route");
}));

module.exports = router;
