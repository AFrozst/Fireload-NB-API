"use strict";

module.exports = (sequelize, DataTypes) => {
  const Firesector = sequelize.define(
    "Firesector",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      observations: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      totalFireload: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Institutions",
          key: "id",
        },
      },
    },
    {
      tableName: "firesectors",
    }
  );

  Firesector.associate = function (models) {
    // associations can be defined here
    Firesector.belongsTo(models.Institution, {
      as: "institution",
      foreignKey: "institutionId",
    });

    Firesector.belongsToMany(models.Combustiblematerial, {
      as: "materials",
      through: "sector_material",
      foreignKey: "sector_id",
    });
  };

  return Firesector;
};
