"use strict";

module.exports = (sequelize, DataTypes) => {
  const Combustiblematerial = sequelize.define(
    "Combustiblematerial",
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
      tableName: "combustiblematerials",
    }
  );

  Combustiblematerial.associate = function (models) {
    // associations can be defined here
    Combustiblematerial.belongsToMany(models.Firesector, {
      as: "sectors",
      through: "sector_material",
      foreignKey: "material_id",
    });
  };

  return Combustiblematerial;
};
