var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo')
const privateKey = process.env.JWT_PRIVATE_KEY;


/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.post('/', function (req, res) {
  res.send(req.params);
});

module.exports = router;
