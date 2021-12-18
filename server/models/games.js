'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Games.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    roundCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};