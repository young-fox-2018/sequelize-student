const Controller = require("./Controller/controller")
const args = process.argv.slice(2);
const command = args[0]
const options = args.slice(1)

// console.log(options)

switch (command) {
    case "getFullName": Controller.fullName(); 
    break;

    case "getBirthDate": Controller.birthday();
    break;

    case "getFemaleStudent": Controller.femaleStudents();
    break;

    case "create" : Controller.create(options)
}
