'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todos', [{
      id: '6bf67044-8c0b-4c46-ad28-54ad7487b57c',
      id_user: '2a15063a-5148-42b9-a245-722cb0095fb0',
      task: 'Test Task',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: '1e7740a6-c324-46cb-9eeb-8f54034c69ca',
      id_user: '2a15063a-5148-42b9-a245-722cb0095fb0',
      task: 'Test Task 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todos', null, {});

  }
};
