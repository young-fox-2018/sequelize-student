'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        first_name: 'Nikolas',
        last_name: 'Friesen',
        gender: 'female',
        birthday: '1998-12-24',
        email: 'agustina_braun@wintheiser.info',
        phone: '449.897.7415',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Randi',
        last_name: 'Halvorson',
        gender: 'male',
        birthday: '1997-01-29',
        email: 'heber.upon@bechtelarwisozk.biz',
        phone: '(697)436-2633',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Sally',
        last_name: 'Buckridge',
        gender: 'female',
        birthday: '1997-10-30',
        email: 'nora@treutel.name',
        phone: '1-351-672-6358x02502',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Morris',
        last_name: 'Swift',
        gender: 'male',
        birthday: '1995-06-27',
        email: 'cordell@sanfordkuhlman.org',
        phone: '(600)142-5639x9380',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Sidney',
        last_name: 'Ortiz',
        gender: 'male',
        birthday: '1997-04-04',
        email: 'erling@davis.name',
        phone: '554.170.3265',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Reid',
        last_name: 'Skiles',
        gender: 'male',
        birthday: '1994-10-13',
        email: 'mike_harvey@nikolaus.com',
        phone: '(543)511-2123',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Violet',
        last_name: 'Dickens',
        gender: 'female',
        birthday: '1994-11-19',
        email: 'rubye_olson@collins.biz',
        phone: '1-410-486-1411x5058',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Marguerite',
        last_name: 'Flatley',
        gender: 'female',
        birthday: '1995-05-28',
        email: 'wanda_okon@hane.name',
        phone: '572.978.5828x07860',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Cary',
        last_name: 'Schoen',
        gender: 'male',
        birthday: '1996-07-31',
        email: 'fay@runolfon.biz',
        phone: '1-828-134-7828x66958',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        first_name: 'Mazie',
        last_name: 'Gibson',
        gender: 'female',
        birthday: '1995-09-23',
        email: 'doug@roberts.biz',
        phone: '144.038.7351x24117',
        createdAt: new Date,
        updatedAt: new Date
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
  }
};
