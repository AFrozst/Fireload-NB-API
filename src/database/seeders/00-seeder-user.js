"use strict";
const { encrypt } = require("../../utils/handlePassword");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: await encrypt("123456"),
        name: "Admin",
        lastName: "Fireload NB",
      },
      {
        email: "test@gmail.com",
        password: await encrypt("123456"),
        name: "Test",
        lastName: "Fireload NB",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
