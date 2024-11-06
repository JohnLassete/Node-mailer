const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  auth: {
    user: "project.6",
    pass: "secret.6",
  },
  secure: false,
});

const mailOptions = {
  from: '"Your name" <your-email@example.com>',
  to: "recipient@example.com",
  subject: "Test Email from Node.js",
  text: "This is a test email sent from a Node.js application using Nodemailer!",
  html: "<p>THis is a <strong>test email</strong> sent from a Node.js application using Nodemailer!</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});