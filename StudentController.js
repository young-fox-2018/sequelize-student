const View = require('./View');
const Model = require('./models');
const Student = Model.Student

class StudentController {
    static fullName() {
        Student.findAll()
        .then(data => {
            let students = data.map(student => student.getFullName());
            View.displayData(students);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        });
    }

    static getAge() {
        Student.findAll()
        .then(data => {
            let studentAge = data.map(student => student.getAge());
            View.displayData(studentAge);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static getFemaleStudents() {
        Student.getFemaleStudents()
        .then(students => {            
            View.displayData(students);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static add(args) {
        console.log(args);
        Student.create({
            first_name: args[1],
            last_name: args[2],
            gender: args[3],
            birthday: args[4],
            email: args[5],
            phone: args[6],
            height: args[7]
        })
        .then(data => {
            View.displayData(data);
            process.exit();
        })
        .catch(err => {
            View.displayError(err);
        })
    }
}

module.exports = StudentController