const { Student } = require('../models')
const View = require('../views/ViewStudent')

class StudentController {
    static showFullname() {
        Student.findAll()
            .then(data => {
                data.forEach(datum => {
                    View.showData(datum.getFullName())
                })
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static getAge() {
        Student.findAll()
            .then(data => {
                data.forEach(datum => {
                    View.showData(datum.getAge())
                })
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static getFemaleStudents() {
        Student.getFemaleStudents()
            .then(data => {
                data.forEach(datum => {
                    datum.fullName = datum.getFullName()
                    console.log(datum)
                })
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static create(params) {
        Student.create(params).then(data => {
            View.showData(data)
        }).catch(err => {
            View.showError(err.message)
        })
    }
}

module.exports = StudentController