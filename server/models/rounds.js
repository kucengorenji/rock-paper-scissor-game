'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rounds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rounds.init({
    id: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    state: DataTypes.STRING,
    gameId: DataTypes.INTEGER,
    winnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rounds',
  });
  return Rounds;
};