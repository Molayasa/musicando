const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Album extends Model {}

Album.init(
  {
    name: { type: DataTypes.STRING(45), allowNull: false },
    length: DataTypes.INTEGER(11),
  },
  {
    sequelize,
    modelName: 'Album',
    underscored: true,
  }
);

module.exports = Album;
