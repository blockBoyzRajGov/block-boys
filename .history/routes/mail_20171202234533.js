var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');
const subject = 'Registration URL for certificate';
router.get('/', async function (req, res, next) {
  console.log('....................');
  for (const user of users) {
    sendEmail(user.email, subject, `Please add issuer in your certification wallet using url - http://localhost:2000/issuer and one time key is ${user.nonce} `, true)
  }
});

module.exports = router;
