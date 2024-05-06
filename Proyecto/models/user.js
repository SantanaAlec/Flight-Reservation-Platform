'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Reservation, {
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    role: DataTypes.ENUM('ADMIN', 'CLIENT'),
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
