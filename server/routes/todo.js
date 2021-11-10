var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.post('/', function (req, res) {
  res.send(req.params);
});

module.exports = router;
