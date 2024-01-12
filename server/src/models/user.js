'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId', as: 'user' })
    }
  }
  User.init({
    // Khoá chính không tạo bên này
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    fbUrl: DataTypes.STRING,
    avata: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};