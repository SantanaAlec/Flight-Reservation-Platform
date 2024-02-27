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
      flight.belongsTo(models.plane, {
        foreignKey: 'idPlane'
      });
      flight.hasMany(models.reservation, {
        foreignKey: 'idReservation'
      });
    }
  }
  flight.init({
    idPlane: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    detiny: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE,
    luggage: DataTypes.FLOAT,
    cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};