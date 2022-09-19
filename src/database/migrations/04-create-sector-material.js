"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sector_material", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      totalCalorificValue: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      sector_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FireSectors",
          key: "id",
        },
      },
      material_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CombustibleMaterials",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sector_material");
  },
};
