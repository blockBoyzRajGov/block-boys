var express = require('express');
var router = express.Router();
const data = require('../issuer.js');

router.get('/', async function (req, res, next) {
  // const filePath = `${process.cwd()}/issuer.js`;
  // var readStream = fs.createReadStream(filePath);
  // readStream.pipe(res);
  res.send(data);
});

module.exports = router;
