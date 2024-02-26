'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.belongsTo(models.Plane, {
        foreignKey: 'idPlane'
      });
      Flight.hasMany(models.Reservation, {
        foreignKey: 'idReservation'
      })
    }
  }
  Flight.init({
    idPlane: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    destiny: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    luggage: DataTypes.INTEGER,
    cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};