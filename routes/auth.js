const express = require('express');
const router = express.Router();
const passport = require('passport');
const models = require('../models');

router.post('/signup', passport.authenticate('local-signup'), (req, res, next) => {
  if (req.user) {
    res.send(200);
  } else {
    res.send(400);
  }
});

router.post('/check_username', (req, res, next) => {
  console.log(req.body.username, 'test')
  models.Users.findOne({where: {username: req.body.username}})
  .then((user) => {
    if(user){
      console.log('username taken');
      res.send(400);
    } else {
      res.send(200);
    }
  })

})

router.post('/login', passport.authenticate('local-signin'), (req, res, next) => {
  if (req.user) {
    res.send(200);
  } else {
    res.send(400);
  }
});
module.exports = router;