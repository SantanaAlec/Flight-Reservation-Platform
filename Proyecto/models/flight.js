'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flight', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plane: {
        type: Sequelize.STRING,
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destiny: {
        type: Sequelize.STRING,
        allowNull: false
      },
      departureDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrivalDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      luggage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Payment',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      reservationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Reservation',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Flight');
  }
};