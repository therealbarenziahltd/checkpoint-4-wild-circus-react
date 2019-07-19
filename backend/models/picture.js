'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    showId: DataTypes.INTEGER
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.Show);
  };
  return Picture;
};