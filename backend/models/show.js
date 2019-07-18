'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    city: DataTypes.STRING,
    date: DataTypes.DATE,
    priceId: DataTypes.INTEGER
  }, {});
  Show.associate = function(models) {
    Show.hasMany(models.Commentary, {as: 'commentaries', onDelete: 'CASCADE', hooks:true});
    Show.hasMany(models.Picture, {as: 'pictures', onDelete: 'CASCADE', hooks:true});
    Show.belongsTo(models.Price, {foreignKey: 'priceId'});
  };
  return Show;
};