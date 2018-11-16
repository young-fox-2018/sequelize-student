const Controller = require('./controllers/controller')
const argv = process.argv.slice(2)

console.log(argv)

switch (argv[0]) {
    case 'student':
        switch (argv[1]) {
            case 'getFullName':
                Controller.getFullName()
                break;
            case 'getAge':
                Controller.getAge()
                break;
            case 'getFemaleStudent':
                Controller.getFemaleStudent()
                break;
            case 'create':
                Controller.create(argv[2], argv[3], argv[4], argv[5], argv[6], argv[7], argv[8])
                break;
            case 'update':
                Controller.update(argv[2], argv.slice(3))
            default:
                break;
        }
        break;
    default:
        break;
}