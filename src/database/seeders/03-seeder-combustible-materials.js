"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CombustibleMaterials", [
      {
        name: "Aceite de algodón",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Aceite de creosota",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Aceite de lino",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Aceite mineral",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Aceite de oliva",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Aceite de parafina",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Acetaldehído",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Acetamida",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Acetato de amilo",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Acetato de polivinillo",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Acetona",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Acetileno",
        heatValue: 12.0,
        heatValue2: 50.2,
      },
      {
        name: "Acetileno disuelto",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Ácido acético",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Ácido benzoico",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Madera",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Papel",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Cartón",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Plástico",
        heatValue: 24.0,
        heatValue2: 26.0,
      },
      {
        name: "Textil",
        heatValue: 26.0,
        heatValue2: 28.0,
      },
      {
        name: "Cemento",
        heatValue: 28.0,
        heatValue2: 30.0,
      },
      {
        name: "Metal",
        heatValue: 30.0,
        heatValue2: 32.0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CombustibleMaterials", null, {});
  },
};
