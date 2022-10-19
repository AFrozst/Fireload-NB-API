"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "frozst@gmail.com",
        password: "123456",
        name: "Frozst",
      },
      {
        email: "admin@gmail.com",
        password: "123456",
        name: "Admin",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
