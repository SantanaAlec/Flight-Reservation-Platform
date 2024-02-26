'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flight.init({
    idPlane: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    destiny: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    luggage: DataTypes.DECIMAL,
    cost: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};