var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
console.log('json', CertificateVerifier);


router.get('/', async function (req, res, next) {
  let certVerifier = new CertificateVerifier(data, statusCallback);

  certVerifier.verify()
    .then(x => console.log(`final result: ${x}`))
    .catch(e => console.error(`failed: ${e}`));
  res.send('respond with a resource');
});

module.exports = router;
