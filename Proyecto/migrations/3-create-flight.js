'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
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
          model: 'planes',
          key: 'id'
        }
      },
      origin: {
        type: Sequelize.STRING
      },
      detiny: {
        type: Sequelize.STRING
      },
      departureDate: {
        type: Sequelize.DATE
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      luggage: {
        type: Sequelize.FLOAT
      },
      cost: {
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
    await queryInterface.dropTable('flights');
  }
};