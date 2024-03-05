"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("planes", "seats", {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "seats",
                key: "id",
            },
        }),
        
            await queryInterface.addColumn("planes", "createdAt", {
                allowNull: false,
                type: Sequelize.DATE,
            }),
            await queryInterface.addColumn("planes", "updatedAt", {
                allowNull: false,
                type: Sequelize.DATE,
            });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("planes");
    },
};
