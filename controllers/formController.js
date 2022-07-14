const { body, validationResult } = require('express-validator');
var nodemailer = require('nodemailer');
var multiparty = require('multiparty');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log('transporter error',error);
  } else {
    console.log("server is ready to take our messages");
  }
});

const send = (req, res, next) => {

  let form = new multiparty.Form();
  let data = {}; 
  form.parse(req, function (err, fields) {
    console.log('field',fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    const mail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL_RECIPIENTS,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };
    console.log(mail)

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("something went wrong");
      } else {
        res.status(200).send("email successfully sent");
      };
    });
  });
  
};

module.exports = {
  send
}
