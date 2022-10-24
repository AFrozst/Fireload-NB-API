"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sector_material", [
      {
        sector_id: 1,
        material_id: 1,
        weight: 100,
        total: 100,
        ci: 1.5,
      },
      {
        sector_id: 1,
        material_id: 2,
        weight: 200,
        total: 200,
        ci: 1.5,
      },
      {
        sector_id: 1,
        material_id: 3,
        weight: 300,
        total: 300,
        ci: 1.5,
      },
      {
        sector_id: 2,
        material_id: 1,
        weight: 400,
        total: 400,
        ci: 1.5,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sector_material", null, {});
  },
};
