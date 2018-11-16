const { Student } = require("../models/index.js")
const View = require("../views/view")

class StudentController {
    static getFullName(id) {
        Student.findOne(
            { where: { id: id } }
        ).then((result) => {
            let data = {
                name: result.fullName(),
                age: result.getAge(),
                phone: result.phone,
                email: result.email,
                gender: result.gender
            }
            View.dislayDataFullname(data)
        }).catch((err) => {
            View.displayErr(err)
        });
    }

    static getStudentAge() {
        Student.findAll()
            .then(result => {
                let results = []
                result.forEach(element => {
                    let data = {
                        name: element.fullName(),
                        age: element.getAge(),
                        phone: element.phone,
                        email: element.email,
                        gender: element.gender
                    }
                    results.push(data)
                });
                View.displayDataGetAge(results)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }
    static getStudentFemale() {
        Student.getFemale()
            .then(data => {
                let results = []
                data.forEach(element => {
                    let result = {
                        name: element.fullName(),
                        age: element.getAge(),
                        phone: element.phone,
                        email: element.email,
                        gender: element.gender
                    }
                    results.push(result)
                });
                View.dislayDataFemale(results)
            })
            .catch(err => {
                View.displayErr(err)
            })
    }
    static addStudent(input) {

        Student.create(input)
            .then((data) => {
                View.dislayDataAdd(data)
            })
            .catch((err) => {
                View.displayErr(err.message)
            })
    }
}
module.exports = StudentController