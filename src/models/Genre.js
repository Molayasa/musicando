const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Genre extends Model {}

Genre.init(
  {
    name: { type: DataTypes.STRING(45), allowNull: false },
  },
  {
    sequelize,
    modelName: 'Genre',
    underscored: true,
  }
);

module.exports = Genre;
