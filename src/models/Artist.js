const { Model } = require('sequelize');
const sequelize = require('../config/db');

class Artist extends Model {
  static associate(models) {
    // define association here
  }
}

Artist.init(
  {
    first_name: DataTypes.STRING(45),
    last_name: DataTypes.STRING(45),
  },
  {
    sequelize,
    modelName: 'Artist',
    underscored: true,
  }
);

module.exports = Artist;
