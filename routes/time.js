// var newrelic = require('newrelic');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	newrelic.addCustomParameter('RequestObject', req);
	
	res.send('simple time resource');
});

router.get('/error', function(req, res) {
	newrelic.addCustomParameter('RequestObject', req);
	var err = new Error('THIS IS AN ERROR WITH TIME!');
	newrelic.noticeError(err, req);
	throw err;
	res.send('This should throw an error');
});

router.get('/yesterday/', function(req, res) {
	
	var now = new Date();
	var yesterday = new Date();
	yesterday.setDate(now.getDate() - 1);

	newrelic.addCustomParameter('RequestObject', req);
	newrelic.addCustomParameter('yesterday', yesterday);

	res.send('Yesterday Was: ' + yesterday);
});

module.exports = router;
