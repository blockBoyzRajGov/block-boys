var express = require('express');
var router = express.Router();
const users = require('../dbUsers');
router.get('/', async function (req, res, next) {
  res.send(users);
});

module.exports = router;
