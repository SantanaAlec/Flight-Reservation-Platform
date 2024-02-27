'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.reservation, {
        foreignKey: 'idReservation'
      });
    }
  }
  payment.init({
    idReservation: DataTypes.INTEGER,
    paymentMethod: DataTypes.STRING,
    transactionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};