const Controller = require('./controller.js')


// Controller.getFullName()

// Controller.getAge()

// Controller.getFemaleStudents()

let dataObj = {
  first_name: 'Sponge',
  last_name: 'Bob',
  gender: 'male',
  birthday: '1996-04-28',
  email: 'patrick@star3.biz',
  phone: '12345678901s0',
  height: 150,
  createdAt: new Date,
  updatedAt: new Date
}

Controller.create(dataObj)
