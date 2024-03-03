'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bills.init({
    name: DataTypes.STRING,
    uuid: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    total: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bills',
  });
  return bills;
};