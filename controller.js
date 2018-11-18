const Model = require('./models')
const View = require('./view.js')
const Student = Model.student

class Controller {

  static getFullName(){
    Student.findAll()
      .then(function(data) {
        let fullname = data.map(function(element) {
          return element.getFullName()
        })
        View.viewData(fullname)
        process.exit()
      })
      .catch(function(err) {
        View.viewData(err);
      })
  }

  static getAge(){
    Student.findAll()
      .then(function(data) {
        // data.forEach(function(element) {
        //   View.viewData(element.getAge());
        // })
        let age = data.map(function(element) {
          return element.getAge()
        })
        View.viewData(age)
        process.exit()
      })
      .catch(function(err) {
        View.viewData(err);
      })

  }

  static getFemaleStudents() {
    Student.getFemaleStudents()
      .then(function(data) {
        View.viewData(data)
        process.exit()
      })
      .catch(function(err) {
        View.viewData(err)
      })
  }

  static create(dataObj) {
    Student.create(dataObj)
      .then(function(data) {
        View.viewData(data)
      })
      .catch(function(err) {
        View.viewData(err.message)
      })
  }


}

module.exports = Controller

