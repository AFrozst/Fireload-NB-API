"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("firesectors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      area: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      observations: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn("now"),
      },
      totalFireload: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      institutionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Institutions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("firesectors");
  },
};
