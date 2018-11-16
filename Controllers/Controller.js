const Model = require('../models')
const Students = Model.Student
const View = require('../Views/View')

class Controller {

    static getFullName () {
        Students.findAll()
            .then((data) => {
                let temp = []
                data.forEach(e => {
                    temp.push({full_name : e.getFullName()})
                });
                View.display(temp)
                // process.exit()
            })
            .catch((err) => {
                View.errDisplay(err)
            })
    }

    static create (first_name, last_name, gender, birthday, email, phone, tinggi_badan) {
        Students.findOne({
            where: {
                email: email
            }
        })  
        .then((data) => {
            if(!data) {
                Students.create({
                    first_name: first_name,
                    last_name: last_name,
                    gender: gender,
                    birthday: birthday,
                    email: email,
                    phone: phone,
                    tinggi_badan: tinggi_badan
                })
                .then((data) => {
                    View.display(`masok pak eko!`)
                })
                .catch((err) => {
                    if(err.errors) {
                        err.errors.forEach(element => {
                            View.errDisplay(element.message)
                        });
                    } else {
                        View.errDisplay(err)
                    }
                })
            } else {
                throw `email udeh ada bous!`
            }
        })
        .catch((err) => {
            View.errDisplay(err)
        })
       
    }

    static getAge () {
        Students.findAll()
            .then((data) => {
                let temp = []
                data.forEach(e => {
                    temp.push({
                        full_name: e.getFullName(),
                        age: e.getAge()
                    })
                });
                View.display(temp)
                // process.exit()
            })
            .catch((err) => {
                View.errDisplay(err)
            })
    }

    static getFemale () {
        Students.getFemale()
            .then((data) => {
                View.display(data)
                process.exit()
            })
            .catch((err) => {
                View.errDisplay(err)
            })
    }

}

module.exports = Controller