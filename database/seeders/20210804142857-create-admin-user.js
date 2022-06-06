'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@admin.com',
          password: '$2b$13$YDM4hWMVtqf1wOtLQ3uTnO.yyrALrZlMmrTp/ARMtG1XyK9WJMhPO', // password: admin0
          isActive: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', 1, {});
  },
};
