'use strict';

module.exports = function (sequelize, DataTypes) {
  var Setting = sequelize.define('Setting', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    type: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.TEXT,
      length: 'long',
      allowNull: false
    }
  }, {
    indexes: [{
      unique: true,
      fields: ['name']
    }]
  });

  return Setting;
};