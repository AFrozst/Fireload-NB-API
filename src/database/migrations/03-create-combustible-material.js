"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("combustiblematerials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      heatValue: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      heatValue2: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("combustiblematerials");
  },
};
