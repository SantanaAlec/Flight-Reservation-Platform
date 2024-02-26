'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plane.hasMany(models.Flight, {
        foreignKey: 'idPlane'
      });
      Plane.hasMany(models.Seat, {
        foreignKey: 'idPlane'
      });
    }
  }
  Plane.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plane',
  });
  return Plane;
};