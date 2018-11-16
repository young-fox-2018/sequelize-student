const { Student } = require('../models/index')
const View = require('../Views/view')


class Controller {
    static fullname(studentId) {
        let option = {
            where: {
                id: Number(studentId)
            }
        }
        Student.findAll(option)
            .then(data => {
                data.forEach(datum => {
                    View.getfullname(datum)
                    process.exit()
                })
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static getage(studentId) {
        let option = {
            where: {
                id: studentId
            }
        }
        Student.findAll()
            .then(data => {
                data.forEach(datum => {
                    View.getage(datum)
                    process.exit()
                })
            })
            .catch(err => {
                View.showError(err)
            })

    }
    static getFemaleStudent() {
        Student.getFemaleStudents()
            .then(data => {
                let femaleStudent = []
                data.forEach(student => {
                    let obj = {}
                    obj.id = student.id
                    obj.fullname = student.fullname()
                    obj.gender = student.gender
                    obj.birthday = student.birthday
                    obj.age = student.getAge()
                    femaleStudent.push(obj)
                })
                View.getfemalestudent(femaleStudent)
                process.exit()
            })
            .catch(err => {
                View.showError(err)
            })
    }
    static addStudent(newStudent) {
        Student.create(newStudent)
            .then(data => {
                View.showData(`Succes add new student!`)
                process.exit()
            })
            .catch(err => {
                View.showError(err.message)
            })

    }

}

module.exports = Controller