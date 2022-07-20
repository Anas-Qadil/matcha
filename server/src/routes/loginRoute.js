const express = require("express");
const router = express.Router();

router.get("/", (re, res) => {
    res.send("generate token");
})

module.exports = router;