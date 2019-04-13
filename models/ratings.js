'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
    customer_rating: DataTypes.INTEGER,
    user_rating: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Ratings.associate = function(models) {
    // associations can be defined here
  };
  return Ratings;
};
