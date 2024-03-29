'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tên bên models thế nào thì bên này cũng vậy và thêm 's'
    await queryInterface.createTable('Overviews', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      bonus: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE,
      },
      expire: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Overviews');
  }
};