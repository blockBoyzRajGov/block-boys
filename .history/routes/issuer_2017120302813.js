var express = require('express');
var fs = require('fs');
var router = express.Router();
const data = require('../issuer.js');
  console.log('...........', data);

router.get('/', async function (req, res, next) {
  // const filePath = `${process.cwd()}/issuer.js`;
  // var readStream = fs.createReadStream(filePath);
  // readStream.pipe(res);
  res.send(data);
});

module.exports = router;
