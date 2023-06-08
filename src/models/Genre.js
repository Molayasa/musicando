const { Model } = require('sequelize');
const sequelize = require('../config/db');

class Genre extends Model {
  static associate(models) {
    // define association here
    Genre.hasMany(models.Song, {
      foreignKey: 'genre_id',
      as: 'songs',
    });
  }
}

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
