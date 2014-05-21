var ccap = require('ccap')();
var express = require('express');
var router = express.Router();

router.all('/',function(req, res){
  var arg = ccap.get();
  req.session.verifycode = arg[0];
  res.end(arg[1]);
});

module.exports = router;
