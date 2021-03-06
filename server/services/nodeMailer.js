"use strict";
const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: async (data) => {
    try {
      const { name, email, message } = data;

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        debug: false,
        logger: true,
      });

      // transport object
      let info = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `${name} ${email}`,
        text: message,
      });

      return { info, name };
    } catch (err) {
      console.log(err);
    }
  },
};
