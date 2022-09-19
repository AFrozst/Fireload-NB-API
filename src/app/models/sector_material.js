"use strict";

module.exports = (sequelize, DataTypes) => {
  const Sector_Material = sequelize.define(
    "Sector_Material",
    {
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      totalCalorificValue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      sector_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "FireSectors",
          key: "id",
        },
      },
      material_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "CombustibleMaterials",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "sector_material",
      timestamps: false,
    }
  );

  return Sector_Material;
};
