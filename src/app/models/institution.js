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
      numberFireSectors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );

  Institution.associate = function (models) {
    // associations can be defined here
  };

  return Institution;
};
