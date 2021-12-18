'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserStats.init({
    userId: DataTypes.INTEGER,
    levelid: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStats',
  });
  return UserStats;
};