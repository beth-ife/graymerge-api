'use strict';
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define('categories', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
      },
      name: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
      },
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};