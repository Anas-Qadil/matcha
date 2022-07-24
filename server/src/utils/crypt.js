const express = require("express");
const bcrypt = require("bcrypt");


const crypt = (data) => {
    bcrypt.hash(data, 10, (err, newdata) => {
        if (err)
            return err;
        return(newdata);
    });
}

module.exports = crypt