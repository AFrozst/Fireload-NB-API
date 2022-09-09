"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("FireSectors", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
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
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("FireSectors");
  },
};
