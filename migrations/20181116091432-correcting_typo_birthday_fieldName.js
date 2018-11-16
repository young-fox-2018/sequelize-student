'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Students", "birthdya", "birthday");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Students", "birthday", "birthdya");
  }
};
