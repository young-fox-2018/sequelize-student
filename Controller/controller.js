
const Model = require("../models");
const View = require("../View/view")
const Student = Model.Student;

class Controller {
    static fullName() {
        Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.displayFullName(element.getFullName())
                });
                process.exit()
            })
            .catch(err => {
                View.displayFullName(err)
            })
    }

    static birthday() {
        Student.findAll()
        .then(data => {
            data.forEach(element => {
                View.displayAge(element.getAge())
            });
            process.exit()
        })
        .catch(err => {
            View.displayAge(err)
        })
    }

    static femaleStudents() {
        Student.getFemaleStudents()
        .then(data => {
            View.displayFemaleStudent(data)
            process.exit()
        })
        .catch(err => {
            View.displayFemaleStudent(err)
        })
    }

    static create() {
        // console.log(input)
        Student.create({
            first_name: "maitreya",
            last_name: "angabhaya",
            gender: "female",
            birthday: "1999-5-5",
            email: "pepe@mail.com",
            phone: "0896789087",
            heigth: 148
        }).then(data => {
            View.displayNewData(data)
            process.exit()
        }).catch(err => {
            View.displayNewData(err)
        })
    }
}

module.exports = Controller