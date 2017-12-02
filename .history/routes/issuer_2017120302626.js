var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
const data = require('./verify-json');
function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.get('/', async function (req, res, next) {
  const filePath = `${process.cwd()}/issuer.js`;
  console.log('...........', filePath);
  // var readStream = fs.createReadStream(filePath);
  // readStream.pipe(res);
  res.send(filePath);
});

module.exports = router;
