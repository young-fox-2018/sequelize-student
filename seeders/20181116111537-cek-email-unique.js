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
   return queryInterface.bulkInsert("Students" ,[{
    first_name: "Nikos",
    last_name: "Friesen",
    gender: "female",
    birthday: "1998-10-25",
    email:"agustina_braun@wintheiser.info",
    phone:"449.897.7415",
    createdAt: new Date(),
    updatedAt: new Date(),
    height:150
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("students", null)
  }

};
