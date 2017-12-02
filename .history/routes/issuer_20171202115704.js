var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
const data = require('./verify-json');
function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.get('/', async function (req, res, next) {
  res.send()
  const filePath = `${process.cwd()}/roaster.json`;
});

module.exports = router;
