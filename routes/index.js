var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', { title: 'Simple New Relic Tester Application' });
});

module.exports = router;
