"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Institutions", [
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
        numberFireSectors: 2,
        createdAt: new Date(),
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
        numberFireSectors: 2,
        createdAt: new Date(),
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
        numberFireSectors: 2,
        createdAt: new Date(),
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
        numberFireSectors: 4,
        createdAt: new Date(),
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
        numberFireSectors: 0,
        createdAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Institutions", null, {});
  },
};
