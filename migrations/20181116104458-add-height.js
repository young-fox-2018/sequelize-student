'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn("Students", "height", {
     type:Sequelize.INTEGER,
     min:150
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn("Students" ,"height")
  }
};
