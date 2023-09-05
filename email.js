require("dotenv").config()


const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: process.env.USERNAME, key: process.env.MAILGUN_API_KEY});

console.log(mg)

module.exports = mg