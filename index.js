const args = process.argv.slice(2);
const StudentController = require('./StudentController');

switch (args[0]) {
    case 'add': StudentController.add(args); break;
    case 'getFullName': StudentController.fullName(); break;
    case 'getAge': StudentController.getAge(); break;
    case 'getFemaleStudents': StudentController.getFemaleStudents(); break;

    default:
        break;
}