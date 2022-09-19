"use strict";

module.exports = (sequelize, DataTypes) => {
  const FireSector = sequelize.define(
    "FireSector",
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
      tableName: "FireSectors",
    }
  );

  FireSector.associate = function (models) {
    // associations can be defined here
    FireSector.belongsTo(models.Institution, {
      as: "institution",
      foreignKey: "institutionId",
    });

    FireSector.belongsToMany(models.CombustibleMaterial, {
      as: "materials",
      through: "Sector_Material",
      foreignKey: "sector_id",
    });
  };

  return FireSector;
};
