"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("Sector_Combustible", [
      {
        weight: 100,
        totalCalorificValue: 100,
        fireSectorId: 1,
        combustibleMaterialId: 18,
      },
      {
        weight: 200,
        totalCalorificValue: 200,
        fireSectorId: 1,
        combustibleMaterialId: 1,
      },
      {
        weight: 300,
        totalCalorificValue: 300,
        fireSectorId: 1,
        combustibleMaterialId: 2,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Sector_Combustible", null, {});
  },
};
