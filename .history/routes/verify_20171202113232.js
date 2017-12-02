var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
const data = require('./verify-json');
function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.post('/', async function (req, res, next) {
  const data = req.body.data;
  console.log('............', process.cwd());
  const filePath = `${process.cwd()}/csvs/${colName}-4-keys.csv`;
  await fs.appendFile(filePath, `${id},${err.message}${os.EOL}`);
  let certVerifier = new CertificateVerifier(JSON.stringify(data), statusCallback);

  certVerifier.verify().then(x => {
    res.send(`final result: ${x}`);
  }).catch(e => {
    res.send(`failed: ${e}`);
  });
});

module.exports = router;
