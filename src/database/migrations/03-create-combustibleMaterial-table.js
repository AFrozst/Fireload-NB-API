"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("CombustibleMaterials", {
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
      heatValue: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      heatValue2: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CombustibleMaterials");
  },
};
