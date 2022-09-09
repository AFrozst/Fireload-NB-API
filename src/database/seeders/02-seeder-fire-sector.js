"use strcit";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("FireSectors", [
      {
        name: "Sector 1",
        area: 100,
        description: "Sector 1 de la institución 1",
        observations: "Sector 1 observaciones",
        institutionId: 1,
      },
      {
        name: "Sector 2",
        area: 200,
        description: "Sector 2 de la institución 1",
        observations: "Sector 2 observaciones",
        institutionId: 1,
      },
      {
        name: "Sector 3",
        area: 300,
        description: "Sector 3 de la institución 2",
        observations: "Sector 3 observaciones",
        institutionId: 2,
      },
      {
        name: "Sector 4",
        area: 400,
        description: "Sector 4 de la institución 2",
        observations: "Sector 4 observaciones",
        institutionId: 2,
      },
      {
        name: "Sector 5",
        area: 500,
        description: "Sector 5 de la institución 3",
        observations: "Sector 5 observaciones",
        institutionId: 3,
      },
      {
        name: "Sector 6",
        area: 600,
        description: "Sector 6 de la institución 3",
        observations: "Sector 6 observaciones",
        institutionId: 3,
      },
      {
        name: "Sector 7",
        area: 700,
        description: "Sector 7 de la institución 4",
        observations: "Sector 7 observaciones",
        institutionId: 4,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FireSectors", null, {});
  },
};
