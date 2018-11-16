'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Students",[
      {
        first_name: "Nikolas",
        last_name: "Friesen",
        gender: "female",
        birthday: "1998-12-24",
        email: "augtina@gmail.com",
        phone: "40004.000434.22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "alas",
        last_name: "Frdfn",
        gender: "male",
        birthday: "1998-10-15",
        email: "tina@gmail.com",
        phone: "45554.000434.22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Star",
        last_name: "Fdfdfden",
        gender: "male",
        birthday: "1998-02-02",
        email: "augt@gmail.com",
        phone: "40004.550434.22",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Students', null, {});
  }
};
