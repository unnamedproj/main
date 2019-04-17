const express = require('express');
const router = express.Router();
const ratings = require('../models/ratings')

router.get('/rate_user', function(req, res, next){
	console.log(req.body);
	//parameters: from who (use their id), and how many (out of 5, int)
	var userid = req.body.user.id;
	var ratings = req.body.ratings;
	var description = req.body.description;
	var placeholder;
	Ratings.create(userid, placeholder, ratings, placeholder, description)
	.then((ratings, res) => {
		if(!ratings){
			res.done(null, false);
		} else {
			res.send(null, ratings);
		}
	});
});

router.get('/rate_customer', function(req, res, next){
	console.log(req);
	//parameters: from who (use their id), and how many (out of 5, int)
	var userid = req.body.user.id;
	var ratings = req.body.ratings;
	var description = req.body.description;
	var placeholder;
	Ratings.create(placeholder, userid, placeholder, ratings, description)
	.then((ratings, res) => {
		if(!ratings){
			res.done(null, false);
		} else {
			res.send(null, ratings);
		}
	});
});


router.get('/get', function(req, res, next){
	//parameters: user
	Ratings.findAll( { 
		where {
			user: req.body.user.id,
		}
	})
	.then(result => {
		var sum;
		for(var i=0; i<result.length; i++){
			sum += result[i];
		}
		var average = sum / result.length;
		res.send(average);
	})
});

module.exports = router;