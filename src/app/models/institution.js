"use strict";

module.exports = (sequelize, DataTypes) => {
  const Institution = sequelize.define(
    "Institution",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
      numberFireSectors: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  Institution.associate = (models) => {
    Institution.hasMany(models.FireSector, {
      as: "firesectors",
      foreignKey: "institutionId",
    });

    Institution.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
  };

  return Institution;
};
