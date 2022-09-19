"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "guest",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};