'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shifts.hasMany(models.attendances, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  shifts.init({
    name: DataTypes.STRING,
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'shifts',
    paranoid:true
  });
  return shifts;
};