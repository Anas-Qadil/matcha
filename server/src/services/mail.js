const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

async function main() {

	const email = process.env.EMAIL;
	const password = process.env.APPPW;

	const from = "matcha@team.com";
	const EmailReciever = "zakaria.akdim37@gmail.com";
	const subject = "matcha Email Test";
	const text = "Hello world?";
	const html = "<b>Hello world?</b>";

	console.log(email);
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
		from : `Segfault <${from}>`,
		to : EmailReciever,
		subject : subject,
		text : text,
		html : html,
	});

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error); //turn this on