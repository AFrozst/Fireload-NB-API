"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("CREATE EXTENSION unaccent;");
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("DROP EXTENSION unaccent;");
  },
};
