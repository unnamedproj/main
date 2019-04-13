'use strict';
exports.method = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    availability: DataTypes.STRING,
    description: DataTypes.STRING,
    optional_info: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

module.exports = {
  findOne: function(user){
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM Users WHERE username=?';
      db.query(queryString, [user.username], (err, res) => {
        if (err) {
         // send back an error
          console.log('errorrrrr');
          reject(err);
        } else {
          if (res.length) {
            console.log('found one');
            // found a user with username that was passed in
            resolve(res[0]);
          } else {
            console.log('did not find one');
            // did not find a user with username
            resolve(false);
          }
        }
      });
    });
  },

  create: function(username, email, password, firstName, lastName){
    return new Promise ((resolve, reject) => {
      const queryString = 'INSERT INTO Users (name, username, password) VALUES (?, ?, ?)';
      db.query(queryString, [name, user, pass], (err, res) => {
        console.log("45:", res, err);
        if (err) {
          reject(err);
        } else {
          resolve(true);    
        }
      });
    });
  }
}