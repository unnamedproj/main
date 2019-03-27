'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ratins = sequelize.define('Ratings', {
    customer_rating: DataTypes.INTEGER,
    user_rating: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Ratins.associate = function(models) {
    // associations can be defined here
  };
  return Ratings;
};