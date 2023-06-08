const { Model } = require('sequelize');
const sequelize = require('../config/db');

class Album extends Model {
  static associate(models) {
    // define association here
    Album.hasMany(models.Song, {
      foreignKey: 'album_id',
      as: 'songs',
    });
  }
}

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
