'use strict';

const fs = require('fs')
let data = fs.readFileSync('./students.csv', 'utf8').toString().split('\n').slice(1)

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arr = []
    data.forEach(function (student) {
      let obj = {}
      let split = student.split(',')
      obj.first_name = split[1]
      obj.last_name = split[2]
      obj.gender = split[3]
      obj.birthday = split[4]
      obj.email = split[5]
      obj.phone = split[6]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
      arr.push(obj)
    })
    return queryInterface.bulkInsert('Students', arr, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Students', null, {});
  }
};
