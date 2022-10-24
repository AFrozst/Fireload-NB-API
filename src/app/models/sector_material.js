"use strict";

module.exports = (sequelize, DataTypes) => {
  const Sector_Material = sequelize.define(
    "Sector_Material",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
      },
      ci: {
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
        type: DataTypes.DATE,
      },
      updatedAt: {
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
