var express = require('express');
var router = express.Router();
var trendzController = require('../controllers/trendz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/trendz',trendzController.interestOverTime)


module.exports = router;
