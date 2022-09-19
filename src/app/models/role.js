"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },{
    tableName: "roles",
  });

  Role.associate = function (models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      as: "users",
      through: "user_role",
      foreignKey: "role_id",
    });
  };

  return Role;
};
