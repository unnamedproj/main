const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect('/signin');
}

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('index');
});

router.get('/login', (req, res, next) => {
  res.render('index');
});

router.get('/homepage', (req, res, next) => {
  res.render('index');
});

router.get('/find', (req, res, next) => {
	res.render('index');
});

router.get('/profile', isLoggedIn, (req, res, next) => {
	res.render('index');
});

module.exports = router;
