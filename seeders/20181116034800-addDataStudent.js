'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = require("../studentData")
    data.forEach(Element => {
      Element.createdAt = new Date()
      Element.updatedAt = new Date()
    });

    return queryInterface.bulkInsert('Students', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});

  }
};
