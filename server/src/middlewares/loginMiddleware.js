const express = require("express");
const asyncHandler = require("express-async-handler");

const loginMiddleware = asyncHandler(async(req, res, next) => {

    const user = req.body;
    if (!user)
    {
        res.status(400);
        throw new Error("Empty Fields");
    }
    next();

});

module.exports = loginMiddleware;