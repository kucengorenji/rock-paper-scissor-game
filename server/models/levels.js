'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Levels.init({
    name: DataTypes.STRING,
    minPoint: DataTypes.INTEGER,
    maxPoint: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Levels',
  });
  return Levels;
};