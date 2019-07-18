'use strict';
module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    adult: DataTypes.INTEGER,
    child: DataTypes.INTEGER,
    group: DataTypes.INTEGER,
    school: DataTypes.INTEGER
  }, {});
  Price.associate = function(models) {
    Price.hasMany(models.Show, {as: 'prices'});
  };
  return Price;
};