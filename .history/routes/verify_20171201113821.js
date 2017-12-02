var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');

function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.get('/', async function (req, res, next) {
  const data = req.params.data;
  let certVerifier = new CertificateVerifier(data, statusCallback);

  certVerifier.verify().then(x => {
    console.log(`final result: ${x}`);
    res.send('respond with a resource');
  }).catch(e => {
    console.error(`failed: ${e}`);
  });
});

module.exports = router;
