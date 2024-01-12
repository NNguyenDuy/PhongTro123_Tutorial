'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.hasOne(models.Post, { foreignKey: 'imagesId', as: 'images' })
      // define association here
    }
  }
  Image.init({
    // Khoá chính không tạo bên này
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};