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
    return queryInterface.bulkInsert('Students', [
        {
          first_name: "Nikolas",
          last_name: "Friesen",
          gender: "female",
          birthday: "1998-12-24",
          email: "agustina_braun@wintheiser.info",
          phone: "449.897.7415",
          height: 170,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
         first_name: "Randi",
         last_name: "Halvorson",
         gender: "male",
         birthday: "1997-01-29",
         email: "heber.upton@bechtelarwisozk.biz",
         phone: "(697)436-2633",
         height: 171,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         first_name: "Sally",
         last_name: "Buckridge",
         gender: "female",
         birthday: "1997-10-30",
         email: "nora@treutel.name",
         phone: "1-351-672-6358x02502",
         height: 172,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         first_name: "Morris",
         last_name: "Swift",
         gender: "male",
         birthday: "1997-04-04",
         email: "cordell@sandfordkuhlman.org",
         phone: "554.170.3265",
         height: 173,
         createdAt: new Date(),
          updatedAt: new Date()
       },
       {
         first_name: "Reid",
         last_name: "Skiles",
         gender: "male",
         birthday: "1994-10-13",
         email: "mike_harvey@nikolaus.com",
         phone: "(543)511-2123",
         height: 174,
         createdAt: new Date(),
          updatedAt: new Date()
       },
    
       {
         first_name: "Violet",
         last_name: "Dickens",
         gender: "female",
         birthday: "1994-11-19",
         email: "rubye_olson@collins.biz",
         phone: "1-410-486-1411x5058",
         height: 175,
         createdAt: new Date(),
          updatedAt: new Date()
       },
       {
         first_name: "Marguerite",
         last_name: "Flatley",
         gender: "female",
         birthday: "1995-05-28",
         email: "wanda_okon@hane.name",
         phone: "572.9789.5825x078",
         height: 176,
         createdAt: new Date(),
          updatedAt: new Date()
       },
       {
         first_name: "Cary",
         last_name: "Schoen",
         gender: "male",
         birthday: "1996-07-31",
         email: "fay@runolfon.biz",
         phone: "1-828-134-7828x66958",
         height: 177,
         createdAt: new Date(),
          updatedAt: new Date()
       },
       {
         first_name: "azie",
         last_name: "Gibson",
         gender: "female",
         birthday: "1995-09-23",
         email: "doug@roberts.biz",
         phone: "144.038.7351x241",
         height: 178,
         createdAt: new Date(),
          updatedAt: new Date()
       }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
