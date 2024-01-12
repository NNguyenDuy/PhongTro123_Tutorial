'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {}
  }
  Price.init(
    {
      // Khoá chính không tạo bên này
      order: DataTypes.INTEGER,
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Price',
    }
  )
  return Price
}
