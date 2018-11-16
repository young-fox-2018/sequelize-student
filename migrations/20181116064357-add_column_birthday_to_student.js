'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'birthday', { type: Sequelize.STRING })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'birthday')
  }
};
