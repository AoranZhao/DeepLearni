var express = require('express');
var {influencer} = require('../lib');
var router = express.Router();

router.get('/influencers', function(req, res) {
	var fb_id = req.query.fb_id;
	var result = influencer.influencers(fb_id);
	console.log(JSON.stringify(result));
	res.send(result);
});

router.get('/influencers/most_influential', function(req, res) {
	var result = influencer.mostInfluential();
	console.log(JSON.stringify(result));
	res.send(result);
});

exports = module.exports = router;