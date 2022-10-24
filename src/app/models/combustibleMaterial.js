"use strict";

module.exports = (sequelize, DataTypes) => {
  const CombustibleMaterial = sequelize.define(
    "CombustibleMaterial",
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
      heatValue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      heatValue2: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      tableName: "CombustibleMaterials",
    }
  );

  CombustibleMaterial.associate = function (models) {
    // associations can be defined here
    CombustibleMaterial.belongsToMany(models.FireSector, {
      as: "sectors",
      through: "Sector_Material",
      foreignKey: "materialId",
    });
  };

  return CombustibleMaterial;
};
