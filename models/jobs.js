'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define('Jobs', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {});
  Jobs.associate = function(models) {
    // associations can be defined here
  };
  return Jobs;
};
