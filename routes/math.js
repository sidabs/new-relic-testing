// var newrelic = require('newrelic');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('simple math resource');
});

router.get('/error', function(req, res) {
	var err = new Error('THIS IS AN ERROR WITH MATH!');
	newrelic.noticeError(err, req);
	throw err;
	res.send('This should throw an error');
});

router.get('/addTwo/:elementOne/:elementTwo', function(req, res) {
	var elementOne = req.params.elementOne ? parseInt(req.params.elementOne) : 0;
	var elementTwo = req.params.elementTwo ? parseInt(req.params.elementTwo) : 0;

	var result = elementOne + elementTwo;
	
	res.send('Your Result Is: ' + result);
});

router.get('/random', function(req, res) {
	var random = parseInt(Math.random() * 100);
	
	res.send('Your Result Is: ' + random);
});

module.exports = router;
