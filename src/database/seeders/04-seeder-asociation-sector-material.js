"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sector_material", [
      {
        sector_id: 1,
        material_id: 1,
        weight: 100,
        totalCalorificValue: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sector_id: 1,
        material_id: 2,
        weight: 200,
        totalCalorificValue: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sector_id: 1,
        material_id: 3,
        weight: 300,
        totalCalorificValue: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sector_id: 2,
        material_id: 1,
        weight: 400,
        totalCalorificValue: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sector_material", null, {});
  },
};
