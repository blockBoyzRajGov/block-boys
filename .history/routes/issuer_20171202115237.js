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
  // console.log('............', process.cwd());
  const filePath = `${process.cwd()}/4-keys.csv`;
  // console.log('/////////////', filePath);
  await fs.appendFile(filePath, JSON.stringify(data));
  // let certVerifier = new CertificateVerifier(JSON.stringify(data), statusCallback);

  // certVerifier.verify().then(x => {
  //   res.send(`final result: ${x}`);
  // }).catch(e => {
  //   res.send(`failed: ${e}`);
  // });
});

module.exports = router;
