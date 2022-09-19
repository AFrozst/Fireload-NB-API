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
          model: "firesectors",
          key: "id",
        },
      },
      material_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "combustiblematerials",
          key: "id",
        },
      },
    },
    {
      tableName: "sector_material",
      timestamps: false,
    }
  );

  return Sector_Material;
};
