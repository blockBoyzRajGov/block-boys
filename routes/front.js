var express = require('express');
var router = express.Router();
const data = require('../issuer.js');

router.get('/first', async function (req, res, next) {
  res.send('first');
});

router.get('/second', async function (req, res, next) {
  res.send('second');
  
});

router.get('/third', async function (req, res, next) {
  res.send('third');
  
});

module.exports = router;
