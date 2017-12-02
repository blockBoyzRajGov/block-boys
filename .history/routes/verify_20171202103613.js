var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
const data = require('./verify-json');
function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.get('/', async function (req, res, next) {
  const data = req.params.data;
  let certVerifier = new CertificateVerifier(JSON.stringify(data), statusCallback);

  certVerifier.verify().then(x => {
    console.log(`final result: ${x}`);
    res.send('respond with a result resource');
  }).catch(e => {
    console.error(`failed: ${e}`);
    res.send('respond with a error resource');    
  });
});

module.exports = router;
