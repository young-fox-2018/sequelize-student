'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Students', [{
      first_name : 'Nikolas',
      last_name : 'Friesen',
      gender: 'female',
      birthday : new Date('1988-12-24'),
      email : 'agustine_braun@winthesier.info',
      phone : '448.847.7415',
      height : 160,
      createdAt : new Date(),
      updatedAt : new Date()

    },
    {
        first_name : 'Randi',
        last_name : 'Halvorson',
        gender: 'male',
        birthday : new Date('1997-01-29'),
        email : 'heber.upton@bechtelarwisozk.biz',
        phone : '(697)435-2633',
        height : 140,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        first_name : 'Sally',
        last_name : 'Buckridge',
        gender: 'female',
        birthday : new Date('1997-10-30'),
        email : 'nora@treutel.name',
        phone : '1-351-672-6358x02502',
        height : 170,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        first_name : 'Morris',
        last_name : 'Swift',
        gender: 'male',
        birthday : new Date('1995-06-27'),
        email : 'cordell@sanfordkuhlman.org',
        phone : '(600)142-5639x9380',
        createdAt : new Date(),
        height: 180,
        updatedAt : new Date()
    },
      {
        first_name : 'Violet',
        last_name : 'Dickens',
        gender: 'female',
        birthday : new Date('1994-11-19'),
        email : 'rubye_olson@collins.biz',
        phone : '1-410-486-1411x5058',
        height: 110,
        createdAt : new Date(),
        updatedAt : new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Students', null, {});
  }
};
