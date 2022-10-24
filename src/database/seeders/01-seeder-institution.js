"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Institutions", [
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
        location: "Bolivia, Cochabamba, Av. America",
        numberFireSectors: 3,
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
        location: "Bolivia, Cochabamba, Av. America",
        numberFireSectors: 2,
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
        location: "Bolivia, Cochabamba, Av. America",
        numberFireSectors: 2,
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
        location: "Bolivia, Cochabamba, Av. America",
        numberFireSectors: 1,
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
        location: "Bolivia, Cochabamba, Av. America",
        numberFireSectors: 0,
        userId: 1,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Institutions", null, {});
  },
};
