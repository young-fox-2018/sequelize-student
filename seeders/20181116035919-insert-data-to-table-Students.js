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
    const fs = require('fs')
    let data = fs.readFileSync('./data.csv', 'utf-8').toString().split('\n')
    let students = []
    data.forEach(datum => {
      let student = datum.split(',')
      let obj = {}
      obj.first_name = student[1]
      obj.last_name = student[2]
      obj.gender = student[3]
      obj.birthday = student[4]
      obj.email = student[5]
      obj.phone = student[6]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      students.push(obj)
    })
    return queryInterface.bulkInsert('Students', students, {})


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {})
  }
};
