var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');
const subject = 'Nice';
router.get('/', async function (req, res, next) {
  console.log('....................');
  sendEmail(users[957498].email, subject, 'this is body me dear', true)
});

module.exports = router;
