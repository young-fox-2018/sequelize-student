const Model = require('../models')
const Student = Model.student
const View = require('../views/View')

class StudentController {
    static getFullName() {
        Student.findAll()
            .then(data => {
                View.display(data.map(e => e.getFullName()))
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static getAge() {
        Student.findAll()
            .then(data => {
                View.display(data.map(e => e.getAge()))
            })
            .catch(err => {
                View.err(err)
            })
    }

    static getFemale() {
        Student.getFemaleStudent()
            .then(data => {
                View.display(data)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }

    static create(first, last, gender, birthday, email, phone, tinggiBadan) {
        let obj = {
            where: {email: email}
        }
        Student.findOne(obj)
            .then(data => {
                if (data) {
                    let student = {
                        first_name: first,
                        last_name: last,
                        gender: gender,
                        birthday: birthday,
                        email: email,
                        phone: phone,
                        tinggiBadan: tinggiBadan
                    }
                    Student.create(student)
                        .then(data => {
                            View.display('Sucsessfully created data')
                        })
                        .catch(err => {
                            View.display(err)
                        })
                } else {
                    View.displayErr('email sudah terpakai')
                }
                process.exit()
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = StudentController