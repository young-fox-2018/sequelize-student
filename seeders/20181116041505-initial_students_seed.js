'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs')
    let data = fs.readFileSync('./students.csv', 'utf8').split('\n').slice(1)
    let list = data.map(item => {
      item = item.split(',')
      let obj = {
        first_name: item[1],
        last_name: item[2],
        gender: item[3],
        birthday: item[4],
        email: item[5],
        phone: item[6],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return obj
    })
    
    return queryInterface.bulkInsert('Students', list, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
