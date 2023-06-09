const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Artist extends Model {}

Artist.init(
  {
    first_name: { type: DataTypes.STRING(45), allowNull: false },
    last_name: DataTypes.STRING(45),
  },
  {
    sequelize,
    modelName: 'Artist',
    underscored: true,
  }
);

module.exports = Artist;
