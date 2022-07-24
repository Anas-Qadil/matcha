const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");


const SendMail = asyncHandler(async(data) => {

	const cryptedUsername = await bcrypt.hash(data.username, 10);

	fs.readFile("/Users/aqadil/Desktop/1337/matcha/server/src/utils/emailFormat.html", async(err, file) => {
		if (err)
			return console.log(err);
		// const matchaHost = process.env.SERVER_URL;
		const matchaHost = "http://10.13.3.5:3001/";
		const confirmationUrl = matchaHost + "api/confirmEmail/?cryptedUsername=" + cryptedUsername
		const EmailFormat = file.toString().replace("ConfirmationLink", confirmationUrl);
		const email = process.env.EMAIL;
		const password = process.env.PASSWORD;
		const from = "matcha@team.com";
		const EmailReciever = data.email;
		const subject = "Confirm The Email To Complete The Profile Creation";
		const text = "Hello world?text";
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

module.exports = SendMail;
