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
      location: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      environmentDescription: {
        type: DataTypes.STRING,
      },
      activity: {
        type: DataTypes.STRING,
      },
      typeFurniture: {
        type: DataTypes.STRING,
      },
      occupation: {
        type: DataTypes.STRING,
      },
      observations: {
        type: DataTypes.STRING,
      },
      numberMaterials: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      Ra: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      fireload: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      intrinsicLevel: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "BAJO (1)",
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
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
