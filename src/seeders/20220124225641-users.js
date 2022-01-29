'use strict';
const { hashPassword } = require('../utils/encryption')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: '2a15063a-5148-42b9-a245-722cb0095fb0',
      first_name: 'user',
      last_name: '1',
      email: 'user1@mail.com',
      password: hashPassword('password'),
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
