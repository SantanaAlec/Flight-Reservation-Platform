'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seat.belongsTo(models.Plane, {
        foreignKey: 'idPlane'
      });
    }
  }
  Seat.init({
    idPlane: DataTypes.INTEGER,
    number: DataTypes.STRING,
    classtype: DataTypes.STRING,
    state: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};