var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/keyword');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/keywords',ProductController.getKeywords)


module.exports = router;
