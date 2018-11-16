const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

switch (argv[0]) {
    case 'getFullName': Controller.getFullName()
        break;
    case 'getAge' : Controller.getAge()
        break;
    case 'getFemaleStudents' : Controller.getFemaleStudents()
            break;
    case 'create' : Controller.create(argv.slice(1))
        break;
    default:
        break;
}