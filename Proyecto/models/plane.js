'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      plane.hasMany(models.flight, {
        foreignKey: 'idPlane'
      });

      plane.hasMany(models.seat, {
        foreignKey: 'idPlane'
      });
    }
  }
  plane.init({
    type: DataTypes.STRING,
    seats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plane',
  });
  return plane;
};