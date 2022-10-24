"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FireSectors", {
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
      location: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      environmentDescription: {
        type: Sequelize.STRING,
      },
      activity: {
        type: Sequelize.STRING,
      },
      typeFurniture: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      observations: {
        type: Sequelize.STRING,
      },
      numberMaterials: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      Ra: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      fireload: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      intrinsicLevel: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "BAJO (1)",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      institutionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Institutions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("FireSectors");
  },
};
