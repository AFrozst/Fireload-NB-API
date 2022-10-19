"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Institutions", [
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
        numberFireSectors: 2,
        createdAt: new Date(),
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
        numberFireSectors: 2,
        createdAt: new Date(),
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
        numberFireSectors: 2,
        createdAt: new Date(),
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
        numberFireSectors: 1,
        createdAt: new Date(),
        userId: 1,
      },
      {
        fullName:
          "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
        numberFireSectors: 0,
        createdAt: new Date(),
        userId: 1,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Institutions", null, {});
  },
};
