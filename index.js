const studentController = require("./controllers/studentController.js")
const argv = process.argv.slice(2);

switch (argv[0]) {
    case "student":
        switch (argv[1]) {
            case "add":
                studentController.add({
                    first_name: argv[2],
                    last_name: argv[3],
                    gender: argv[4],
                    birthday: argv[5],
                    email: argv[6],
                    phone: argv[7],
                    height: argv[8],
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                break;

            case "getFullName":
                studentController.getFullName()
                break;
            case "getAge":
                studentController.getAge()
                break;

            case "getFemaleStudent":
                {
                    console.log('mausk')
                    studentController.getFemaleStudents()
                }
                break;
        
            default: console.log('default')
                break;
        }
        break;

    default:
        break;
}