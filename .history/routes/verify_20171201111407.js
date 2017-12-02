var express = require('express');
var fs = require('fs');
var router = express.Router();
const { Certificate } = require('../verifier');

router.get('/', async function(req, res, next) {

  fs.readFile('./tests/sample_cert-valid-1.2.0.json', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }

  let cert = Certificate.parseJson(JSON.parse(data));
  console.log(cert.name);

});
  res.send('respond with a resource');
});

module.exports = router;
