var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');

router.get('/', async function (req, res, next) {
  sendEmail(users[957498])
});

module.exports = router;
