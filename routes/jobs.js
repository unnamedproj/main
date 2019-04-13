const express = require('express');
const router = express.Router();
const jobs = require('../models/jobs')

router.get('/find', function(req, res, next){
	Jobs.findAndCountAll( {
		where: { 
			name: req.body.name //if the names are the same
		} 
	})
	.then(result => {
		console.log(result.count); // how many jobs there were
		res.send(result.rows);
	})
});

router.get('/create', function(req, res, next){
	Jobs.create({ username: req.body.name, description: req.body.description, price: req.body.price, date: req.body.date, time: req.body.time, customer: null})
	.then(([user, created]) => {
		console.log(user.get({
			plain: true
		}));
		console.log(created);
		res.send(200);
	})
});

module.exports = router;