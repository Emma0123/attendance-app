'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      attendances.belongsTo(models.users, {foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
      attendances.belongsTo(models.shifts, {foreignKey: 'shiftId', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  attendances.init({
    userId: DataTypes.INTEGER,
    shiftId: DataTypes.INTEGER,
    in: DataTypes.DATE,
    out: DataTypes.DATE,
    location: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'attendances',
  });
  return attendances;
};