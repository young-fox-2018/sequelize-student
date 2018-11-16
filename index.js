const ControllerStudent = require("./controllers/ControllerStudent.js")
const View = require('./views/View.js')

const argv = process.argv.slice(2)
const command = argv[0]
const options = argv.slice(1)
// let a = ControllerStudent.getFullName()
// console.log(a)

// let b = ControllerStudent.getAge()
// console.log(b)

// let c = ControllerStudent.getFemaleStudents()
// console.log(c)

// first_name,last_name,gender,birthday,email,phone,height

switch (command) {
    case "create":
        ControllerStudent.create(options)
        break;
    case "getFullName":
        ControllerStudent.getFullName()
        break;
    case "getAge":
        ControllerStudent.getAge()
        break;
    case "getFemaleStudents":
        ControllerStudent.getFemaleStudents()
        break;
    case "help":
        View.displayHelp()
        break;
    default:
        break;
}
