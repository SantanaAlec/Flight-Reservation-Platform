'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservacion.belongsTo(models.User, { foreignKey: 'idUser', });
      Reservation.hasMany(models.Payment, {
        foreignKey: 'idReservation',
      });
    }
  }
  Reservation.init({
    idUser: DataTypes.INTEGER,
    idFlight: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};