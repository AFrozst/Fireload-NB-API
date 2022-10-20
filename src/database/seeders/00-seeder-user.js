"use strict";
const { encrypt } = require("../../utils/handlePassword");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "frozst@gmail.com",
        password: await encrypt("123456"),
        name: "Frozst",
      },
      {
        email: "admin@gmail.com",
        password: await encrypt("123456"),
        name: "Admin",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
