const express = require("express");
const jwt = require("jsonwebtoken");

const getToken = (authHeader) => {

    const token = authHeader && authHeader.split(' ')[1];
}

module.exports = getToken;