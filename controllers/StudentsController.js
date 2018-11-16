const Model = require('../models/index')
const View = require('../Views/View')

class StudentController {

    static findAllData() {
        Model.Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.showData(element.dataValues)
                })
                process.exit()
            })
            .catch(err => {
                View.showError(err)
                process.exit()
            })
    }

    static showFullName() {
        Model.Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.showData(element.getFullName())
                })
                process.exit()
            })
            .catch(err => {
                View.showError(err)
                process.exit()
            })
    }

    static showAge() {
        Model.Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.showData(`${element.getFullName()} is ${element.getAge()} years old`)
                })
                process.exit()
            })
            .catch(err => {
                View.showError(err)
                process.exit()
            })
    }

    static showAllFemale() {
        Model.Student.getFemaleStudent()
            .then(data => {
                data.forEach(element => {
                    View.showData(element.dataValues)
                })
                process.exit()
            })
            .catch(err => {
                View.showError(err)
                process.exit()
            })
    }

    static createRecord(fname,lname,gender,birthday,email,phone,height) {
        let option = {
            "first_name":fname,
            "last_name":lname,
            "gender":gender,
            "birthday":birthday,
            "email":email,
            "phone":phone,
            "height":height,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
        Model.Student.create(option)
         .then(data => {
             View.showData(`${data.getFullName()} was added into Students`)
             process.exit()
         })
         .catch(err => {
             View.showError(err)
             process.exit()
         })
    }
}

module.exports = StudentController