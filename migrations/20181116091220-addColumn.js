'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Students',
     'tinggi_badan',
      Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Students',
     'tinggi_badan')
  }
};
