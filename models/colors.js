'use strict';
module.exports = (sequelize, DataTypes) => {
  var colors = sequelize.define('colors', {
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
  colors.associate = function(models) {
    // associations can be defined here
  };
  return colors;
};