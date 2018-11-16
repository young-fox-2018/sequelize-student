'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('Students', 'tinggi_badan', 
        { type : Sequelize.STRING,
        after: "email"
        })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('Students', 'tinggi_badan');
  }
};
