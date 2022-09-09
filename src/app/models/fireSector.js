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
      name: DataTypes.STRING,
      area: DataTypes.DOUBLE,
      description: DataTypes.STRING,
      observations: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      totalFireload: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
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
      timestamps: false,
    }
  );

  FireSector.associate = (models) => {
    FireSector.belongsTo(models.Institution, {
      foreignKey: "institutionId",
      as: "institution",
    });
  };

  return FireSector;
};
