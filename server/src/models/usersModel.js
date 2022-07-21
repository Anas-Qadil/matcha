const express = require("express");
const { Schema, model, default: mongoose } = require("mongoose");
const validateEmail = require("../utils/validatUsername");
const { isEmail, isAlphanumeric } = require("validator");

const usersSchema = Schema({
    firstName : {
        type: String,
        required : true,
        maxLength : 16,
        minLength : 3,
        trim : true,
        validate : isAlphanumeric
    },
    lastname : {
        type : String,
        required : true,
        maxLength : 16,
        minLength : 3,
        trim : true,
        validate : isAlphanumeric
    },
    age : {
        type : Number,
        min : 10,
        max : 99,
        required : true,
        unique : false,
    },
    username : {
        type : String,
        required : true,
        lowercase : true,
        maxLength : 16,
        minLength : 3,
        trim : true,
        unique : true,
        validate : isAlphanumeric
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        trim : true,
        lowercase : true,
        unique : true,
        required : true,
        validate : [isEmail, "Please Fill A Valid Email Address"],
    },
    gender : {
        type : String,
        trim : true,
        lowercase : true,
        required : true,
        enum : ["male", "female"],
        unique: false,
    },
    sexualPref : [{
        type : String,
        trim : true,
        lowercase : true,
        required : false,
        unique : false,
        validate : isAlphanumeric
    }],
    biography : {
        type : String, 
        required : false,
        unique : false,
    },
    interests : [{
        type : String,
        lowercase : true,
        required: false,
        unique : false,
        validate : isAlphanumeric
    }],
    seenBy : [{
        type : mongoose.Schema.ObjectId,
    }],
    linkedBy : [{
        type : mongoose.Schema.ObjectId,
    }],
    dislikedBy : [{
        type : mongoose.Schema.ObjectId,
    }],
    fameRating : {
        type: Number,
        min : 0,
        max : 10,
    },
    GPSLocation : {
        type : String,
        trim : true,
        unique : false,
        required : false
    },
    lastConnection : {
        type : Date,
        default : Date.now(),
        unique : false,
        required : false,
    },
    reportedUsers : [{
        type : mongoose.Schema.ObjectId,
    }],
    blockedUsers : [{
        type : mongoose.Schema.ObjectId,
    }]
}, {
    timestamps : {
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    }
})

const userModel = model("users", usersSchema);

module.exports = userModel;