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
        name: "Acetato de polivinilo",
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
        name: "Ácido acético ",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Ácido benzoico ",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Acroleina",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Aguarrás",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Albúmina vegetal",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Alcanfor",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Alcohol alílico",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Alcohol amílico",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Alcohol butílico",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Alcohol cetílico",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Alcohol etílico",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Alcohol metílico",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Almidón",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Anhídrido acético",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Anilina",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Antraceno",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Antracita",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Azucar",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Azufre",
        heatValue: 2.0,
        heatValue2: 8.4,
      },
      {
        name: "Benzaldehído",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Bencina",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Benzol",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Benzofena",
        heatValue: 8.0,
        heatValue2: 33.8,
      },
      {
        name: "Butano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Cacao en polvo",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Café",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Cafeína",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Calcio",
        heatValue: 1.0,
        heatValue2: 4.2,
      },
      {
        name: "Caucho",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Carbón",
        heatValue: 7.5,
        heatValue2: 31.4,
      },
      {
        name: "Carbono",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Cartón",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Cartón asfáltico",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Celuloide",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Celulosa",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Cereales",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Chocolate",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Cicloheptano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Ciclohexano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Ciclopentano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Ciclopropano",
        heatValue: 12.0,
        heatValue2: 50.2,
      },
      {
        name: "Cloruro de polivinilo",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Cola celulósica",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Coque de hulla",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Cuero",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Dietilamina",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Dietilcetona",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Dietileter",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Difenil",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Dinamita (75%)",
        heatValue: 1.0,
        heatValue2: 4.2,
      },
      {
        name: "Dipenteno",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Ebonita",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Etano",
        heatValue: 12.0,
        heatValue2: 50.2,
      },
      {
        name: "Éter amílico",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Éter etílico",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Fibra de coco",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Fenol",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Fósforo",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Furano",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Gasóleo",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Glicerina",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Grasas",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Gutapercha",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Harina de trigo",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Heptano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Hexametileno",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Hexano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Hidrógeno",
        heatValue: 34.0,
        heatValue2: 142.0,
      },
      {
        name: "Hidruro de magnesio",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Hidruro de sodio",
        heatValue: 2.0,
        heatValue2: 8.4,
      },
      {
        name: "Lana",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Leche en polvo",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Lino",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Linóleum",
        heatValue: 5.0,
        heatValue2: 2.1,
      },
      {
        name: "Madera",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Magnesio",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Malta",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Mantequilla",
        heatValue: 9.0,
        heatValue2: 37.2,
      },
      {
        name: "Metano",
        heatValue: 12.0,
        heatValue2: 50.2,
      },
      {
        name: "Monóxido de carbono",
        heatValue: 2.0,
        heatValue2: 8.4,
      },
      {
        name: "Nitrito de acetona",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Nitrocelulosa",
        heatValue: 2.0,
        heatValue2: 8.4,
      },
      {
        name: "Octano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Papel",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Perafina",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Pentano",
        heatValue: 12.0,
        heatValue2: 50.2,
      },
      {
        name: "Petróleo",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Poliamida",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Policarbonato",
        heatValue: 7.0,
        heatValue2: 29.3,
      },
      {
        name: "Poliéster",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Poliestireno",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Polietileno",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Poliisobutileno",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Politetrafluoretileno",
        heatValue: 1.0,
        heatValue2: 4.2,
      },
      {
        name: "Poliuretano",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Propano",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Rayón",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Reseina de pino",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Resina de fenol",
        heatValue: 6.0,
        heatValue2: 25.1,
      },
      {
        name: "Resina de urea",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Seda",
        heatValue: 5.0,
        heatValue2: 21.0,
      },
      {
        name: "Sisal",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Sodio",
        heatValue: 1.0,
        heatValue2: 4.2,
      },
      {
        name: "Sulfuro de carbono",
        heatValue: 3.0,
        heatValue2: 12.5,
      },
      {
        name: "Tabaco",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Té",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Tetralina",
        heatValue: 11.0,
        heatValue2: 46.0,
      },
      {
        name: "Toluol",
        heatValue: 10.0,
        heatValue2: 42.0,
      },
      {
        name: "Triacetato",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
      {
        name: "Turba",
        heatValue: 8.0,
        heatValue2: 33.5,
      },
      {
        name: "Urea",
        heatValue: 2.0,
        heatValue2: 8.4,
      },
      {
        name: "Viscosa",
        heatValue: 4.0,
        heatValue2: 16.7,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CombustibleMaterials", null, {});
  },
};
