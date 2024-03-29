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
      seat.belongsTo(models.plane, {
        foreignKey: 'idPlane'
      });
      seat.belongsTo(models.user, {
        foreignKey: 'idUser'
      });
    }
  }
  seat.init({
    idPlane: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    number: DataTypes.STRING,
    classType: DataTypes.ENUM('ECONOMY', 'BUSINESS', 'FIRST_CLASS'),
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};