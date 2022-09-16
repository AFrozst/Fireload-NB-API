"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sector_Combustible", {
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      totalCalorificValue: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      fireSectorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "FireSectors",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      combustibleMaterialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "CombustibleMaterials",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Sector_Combustible");
  },
};
