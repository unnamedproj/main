var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport,user){
  var Users = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function(user, done) {
     done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Users.findById(id).then(function(user) {
      if(user){
        done(null, user.get());
      }
      else{
        done(user.errors,null);
      }
    });
  });

  var generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
  }

  var isValidPassword = function(userpass,password){
    return bCrypt.compareSync(password, userpass);
  }

  passport.use('local-signup', new LocalStrategy(
    {           
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    }, function(req, username, password, done) {
      Users.findOne({where: {username: username}})
      .then((user) => {
        if (user) {
          console.log('found user');
          return done(null, false, {message: 'Username is already taken'});
        } else {
          console.log('proceed');
          const password = generateHash(req.body.password);
          const data = {
            username: username,
            email: req.body.email,
            password: password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          };

          Users.create(data)
          .then((newUsers, created) => {
            if (!newUsers) {
              return done(null, false);
            }
            if (newUsers) {
              return done(null, newUsers);
            }
          });
        }
      });
    }
  ));

  passport.use('local-signin', new LocalStrategy(
    {
       usernameField: 'username',
       passwordField: 'password',
       passReqToCallback: true
    },
    function(req, username, password, done) {
      Users.findOne({where: {username: username}})
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }
        if (!isValidPassword(user.password, password)) {
          console.log('incorrect password');
          return done(null, false, { message: 'Incorrect password.' });
        }
        const userInfo = user.get();
        return done(null,userInfo);
      })
      .catch((err) => {
        console.log(err);
        return done(null, false, { message: 'Something went wrong with your Signin' });
      });
    }
  ));
}


