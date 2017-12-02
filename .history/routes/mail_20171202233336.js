var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');
const subject = 'Nice';
  sendEmail(users[957498].email, subject, 'this is body me dear', true)
router.get('/', async function (req, res, next) {
  console.log('....................');
});

module.exports = router;
