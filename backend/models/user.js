'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (user) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((err) => console.log(err));
      },
      beforeUpdate: (user) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((err) => console.log(err));
      },
    },
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Commentary, {as: 'commentaries'});
  };
  return User;
};