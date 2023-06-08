const { Model } = require('sequelize');
const sequelize = require('../config/db');

class Song extends Model {
  static associate(models) {
    // define association here
    Song.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
      as: 'artist',
    });

    Song.belongsTo(models.Album, {
      foreignKey: 'album_id',
      as: 'album',
    });

    Song.belongsTo(models.Genre, {
      foreignKey: 'genre_id',
      as: 'genre',
    });
  }
}

Song.init(
  {
    title: { type: DataTypes.STRING(45), allowNull: false },
    length: DataTypes.INTEGER(11),
  },
  {
    sequelize,
    modelName: 'Song',
    underscored: true,
  }
);

module.exports = Song;
