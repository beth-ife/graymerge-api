'use strict';
module.exports = (sequelize, DataTypes) => {
  var currencies = sequelize.define('currencies', {
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
      symbol: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  }, {});
  currencies.associate = function(models) {
    // associations can be defined here
  };
  return currencies;
};