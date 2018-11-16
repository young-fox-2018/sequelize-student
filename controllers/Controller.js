const Model = require('../models')
const View = require('../views/View')

class Controller {
    static getFemale() {
        Model.Student.getFemaleStudents()
            .then(data => {
                View.displayMsg(data)
            })
            .catch(err => {
                View.displayError(err)
            })
    }

    static getAllFullName () {
        Model.Student.findAll()
            .then(data => {
                data = data.map(e => {
                    return e.getFullName()
                })
                View.displayMsg(data)
            })
            .catch(err => {
                View.displayError(err)
            })
    }

    static getAge() {
        Model.Student.findAll()
            .then(data => {
                data = data.map(e => {
                    return e.getAge()
                })
                View.displayMsg(data)
            })
            .catch(err => {
                View.displayError(err)
            })
    }

    static create(first_name, last_name, gender, birthday, email, phone, tinggi_badan) {
        Model.Student.create({
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: phone,
            tinggi_badan: tinggi_badan
        })
            .then(() => {
                View.displayMsg('bisa coy')
            })
            .catch((err) => {
                err.errors.forEach(element => {
                    console.log(element.message)
                });
            })
    }
}

module.exports = Controller