const { Model } = require('sequelize');
const sequelize = require('../config/db');

class Song extends Model {
  static associate(models) {
    // define association here
  }
}

Song.init(
  {
    title: DataTypes.STRING(45),
    length: DataTypes.INTEGER(11),
  },
  {
    sequelize,
    modelName: 'Song',
    underscored: true,
  }
);

module.exports = Song;
