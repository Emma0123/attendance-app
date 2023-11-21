'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.attendances, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('hr', 'employee'),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
    paranoid: true
  });
  return users;
};