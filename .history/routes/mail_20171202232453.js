var express = require('express');
var router = express.Router();
const { sendEmail } = require('../email');
const users = require('../dbUsers');

router.get('/', async function (req, res, next) {
  const filePath = `${process.cwd()}/issuer.json`;
  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

module.exports = router;
