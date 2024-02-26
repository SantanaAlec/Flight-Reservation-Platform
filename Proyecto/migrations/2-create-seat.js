'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPlane: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'planes', // Nombre de la tabla de la relación
          key: 'id', // Clave primaria de la tabla de la relación
        }
      },
      number: {
        type: Sequelize.STRING
      },
      classtype: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};