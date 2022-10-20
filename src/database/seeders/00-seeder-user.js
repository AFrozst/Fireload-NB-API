"use strict";
const { encrypt } = require("../../utils/handlePassword");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: await encrypt("123456"),
        name: "Admin",
      },
      {
        email: "test@gmail.com",
        password: await encrypt("123456"),
        name: "Test",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
