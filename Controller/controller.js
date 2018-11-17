
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

    static create(input) {
        console.log(input)
        Student.create({
            first_name: input[0],
            last_name: input[1],
            gender: input[2],
            birthday: input[3],
            email: input[4],
            phone: input[5]
        })
    }
}

module.exports = Controller