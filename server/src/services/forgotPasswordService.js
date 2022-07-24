const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/usersModel");
const mongoose = require("mongoose");


const SendForgotPasswordMail = asyncHandler(async(ForgotPasswordEmail) => {

    const code = Math.floor(Math.random() * 1000000).toString();
    const user = await userModel.findOne({email : ForgotPasswordEmail});
    user.passwordResetCode = code;
    await user.save();

	fs.readFile("/Users/aqadil/Desktop/1337/matcha/server/src/utils/forgotPasswordEmail.html", async(err, file) => {
		if (err)
			return console.log(err);
		const matchaHost = process.env.SERVER_URL;
		// // const matchaHost = "http://10.13.3.5:3001/";
		const EmailFormat = file.toString().replace("PasswordCode", code);
		const email = process.env.EMAIL;
		const password = process.env.PASSWORD;
		const from = "matcha@team.com";
		const EmailReciever = ForgotPasswordEmail;
		const subject = "Password Reset";
		const text = "Forgot Password Email";
		const html = EmailFormat;

		const transporter = nodemailer.createTransport({
			host : "smtp.gmail.com",
			port : 587,
			secure : false,
			auth : {
				user : email,
				pass : password
			},
		});
		const info = await transporter.sendMail({
			from : `Matcha <Matcha Team>`,
			to : EmailReciever,
			subject : subject,
			text : text,
			html : html,
		});
		console.log("Message sent: %s", info.messageId);
	});

});

module.exports = SendForgotPasswordMail;
