'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {}
  }
  Area.init(
    {
      order: DataTypes.INTEGER,
      code: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Area',
    }
  )
  return Area
}
