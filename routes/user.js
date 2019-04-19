const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/info', (req, res, next) => {
	// console.log('6:',req.user)
	models.User.findOne({
		where: {
			username: req.user.username
		}
	})
	.then((user) => {
		res.send(JSON.stringify(user.dataValues));
	});
});

module.exports = router;