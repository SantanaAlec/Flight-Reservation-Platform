'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reservation.belongsTo(models.user, {
        foreignKey: 'idUser'
      });
      reservation.hasMany(models.payment,{
        foreignKey: 'idReservation'
      });
    }
  }
  reservation.init({
    idUser: DataTypes.INTEGER,
    idFlight: DataTypes.INTEGER,
    state: DataTypes.ENUM('PENDING', 'CANCELED', 'COMPLETED'), 
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};