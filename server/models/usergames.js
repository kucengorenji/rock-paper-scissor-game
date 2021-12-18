'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserGames.init({
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    isWinner: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserGames',
  });
  return UserGames;
};