const argv = process.argv.slice(2)
const StudentController = require('./Controllers/StudentController')

StudentController.create()

switch (argv[0]) {
    case "getfullname":
        StudentController.getFullName()
        break;
    case "getage":
        StudentController.getAge()
        break;
    case "getfemalestudents":
        StudentController.getFemaleStudents()
        break;
    default:
        break;
}