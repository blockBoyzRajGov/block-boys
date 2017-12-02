var express = require('express');
var fs = require('fs');
var router = express.Router();
const { CertificateVerifier } = require('../verifier');
const data = require('./verify-json');
const users = require('../dbUsers');
function statusCallback(arg1) {
  console.log("status=" + arg1);
}

router.post('/', async function (req, res, next) {
  const nonce = req.body.nonce;
  const bitcoinAddress = req.body.bitcoinAddress;
  if (nonce && bitcoinAddress) {
    const user = users[nonce];
    if(user) {
      const filePath = `/common_vol/rosters/roster_testnet.csv`;
      await fs.appendFile(filePath, `\n${user.name},ecdsa-koblitz-pubkey:${bitcoinAddress},${user.email}`);
      res.send('success');
      } else {
        res.status(400).send('User not found');
      }
    } else {
      res.status(500).send('Bad request');
    }
});

module.exports = router;
