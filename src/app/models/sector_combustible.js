module.exports = (sequelize, DataTypes) => {
  const Sector_Combustible = sequelize.define(
    "Sector_Combustible",
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
    },
    {
      timestamps: false,
    }
  );

  return Sector_Combustible;
};