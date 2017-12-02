var express = require('express');
var fs = require('fs');
var router = express.Router();
const { Certificate } = require('../verifier');
const json = require('./verify-json');
console.log('json', json);
router.get('/', async function(req, res, next) {

  // fs.readFile('/tests/data/sample_cert-valid-1.2.0.json', 'utf8', function (err, data) {
  // if (err) {
  //   console.log(err);
  // }
  // console.log('no error');

  let cert = Certificate.parseJson(json);
  console.log(cert.name);

// });
  res.send('respond with a resource');
});

module.exports = router;
