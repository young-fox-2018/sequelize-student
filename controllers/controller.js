const Model = require('../models')
const View = require('../views/view')

class Controller {
    static getFullName() {
        Model.Student.findAll()
            .then(function (data) {
                // View.showData(data.getFullName())
                data.forEach(function (element) {
                    View.showData(element.getFullName())
                })
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
                process.exit()
            })
    }
    static getAge() {
        Model.Student.findAll()
            .then(function (data) {
                data.forEach(function (element) {
                    View.showData(`Student Name: ${element.first_name} ${element.last_name} ${element.getAge()} years old`)
                })
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
                process.exit()
            })
    }
    static getFemaleStudent() {
        Model.Student.getFemaleStudent()
            .then(function (data) {
                View.showData(data)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err)
                process.exit()
            })
    }
    static update(id, field) {
        let options = {}
        for (let i = 0; i < field.length; i += 2) {
            options[field[i]] = field[i + 1]
        }
        Model.Student.update(options, {
            where: {
                id: id
            }
        })
            .then(function () {
                View.showData(`Data with ID: ${id} successfully updated`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err.message)
                process.exit()
            })
    }
    static create(first_name, last_name, gender, email, birthday, phone, height) {
        let obj = {
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            email: email,
            birthday: birthday,
            phone: phone,
            height: height
        }
        Model.Student.create(obj)
            .then(function (student) {
                View.showData(`Data with name : ${student.first_name} ${student.last_name} successfully registered!`)
                process.exit()
            })
            .catch(function (err) {
                View.showErr(err.message)
                process.exit()
            })
    }
}


module.exports = Controller