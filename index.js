const argv = process.argv.slice(2)
const Student = require("./controllers/student.js")
switch (argv[0]) {
    case "getFullName":
        Student.getFullName(argv[1])
        break;
    case "getAge":
        Student.getStudentAge()
        break;
    case "getFemale":
        Student.getStudentFemale()
        break;
    case "addStudent":
        let data = {
            first_name: argv[1],
            last_name: argv[2],
            gender: argv[3],
            birthday: argv[4],
            email: argv[5],
            phone: argv[6],
            height: argv[7]
        }
        Student.addStudent(data)
        break;
    default:
        break;
}