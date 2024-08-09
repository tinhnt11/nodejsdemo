'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
      return queryInterface.bulkInsert('Users',[{
        email:'admin@hmail.com',
        password: '1234567',
        firstName:'Nguyen',
        lastName:'Nga',
        address:'USA',
        gender:'0',
        typeRole:'ROLE',
        keyRole:'R1',
        createdAt:new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('createAt', 'create', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('createAt', 'create');
  }
};
*/