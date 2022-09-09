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
      name: DataTypes.STRING,
      heatValue: DataTypes.DOUBLE,
      heatValue2: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
    }
  );

  CombustibleMaterial.associate = function (models) {
    // associations can be defined here
  };

  return CombustibleMaterial;
};
