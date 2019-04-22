var express = require('express');
var router = express.Router();

var data = require('../resources/data');

// console.log(data.gallery);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data.gallery);
});

/* GET users listing. */
router.get('/:path', function(req, res, next) {
  res.send(req.params);
});

module.exports = router;

