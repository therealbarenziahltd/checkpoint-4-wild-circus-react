'use strict';
module.exports = (sequelize, DataTypes) => {
  const Commentary = sequelize.define('Commentary', {
    userId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Commentary.associate = function(models) {
    Commentary.belongsTo(models.User, {foreignKey: 'userId'});
    Commentary.belongsTo(models.Show, {foreignKey: 'showId'});
  };
  return Commentary;
};