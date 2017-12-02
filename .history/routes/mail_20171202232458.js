var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');

router.get('/', async function (req, res, next) {
  
});

module.exports = router;
