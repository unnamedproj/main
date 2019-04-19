const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/info', (req, res, next) => {
	res.send(JSON.stringify({firstName:'Janson'}));
});

module.exports = router;