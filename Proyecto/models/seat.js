'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seat.init({
    idPlane: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    classType: DataTypes.ENUM('ECONOMY', 'BUSINESS', 'FIRST_CLASS'),
    state: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};