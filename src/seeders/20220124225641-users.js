'use strict';
const { hashPassword } = require('../utils/encryption')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      user_id: 'be8186e4-370c-4a7f-bcfc-4c66e6e0e064',
      first_name: 'user',
      last_name: '1',
      email: 'user1@mail.com',
      password: hashPassword('password'),
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
