'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('todos', [{
      task_id: 'e2cb878c-a7f3-45df-8074-736b24f4116b',
      user_id: 'be8186e4-370c-4a7f-bcfc-4c66e6e0e064',
      task: 'Test Task',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      task_id: 'ffee08b9-729a-4410-9b1b-8cf944369abe',
      user_id: 'be8186e4-370c-4a7f-bcfc-4c66e6e0e064',
      task: 'Test Task 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todos', null, {});

  }
};
