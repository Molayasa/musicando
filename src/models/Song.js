const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');

console.log('Album: ', Album);
console.log('Artist: ', Artist);
console.log('Genre: ', Genre);

class Song extends Model {}

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

// Define associations
Album.hasMany(Song, {
  foreignKey: 'album_id',
  as: 'songs',
});
Song.belongsTo(Album, {
  foreignKey: 'album_id',
  as: 'album',
});

Artist.hasMany(Song, {
  foreignKey: 'artist_id',
  as: 'songs',
});
Song.belongsTo(Artist, {
  foreignKey: 'artist_id',
  as: 'artist',
});

Genre.hasMany(Song, {
  foreignKey: 'genre_id',
  as: 'songs',
});
Song.belongsTo(Genre, {
  foreignKey: 'genre_id',
  as: 'genre',
});

module.exports = Song;
