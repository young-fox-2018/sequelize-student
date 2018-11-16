const input = process.argv.slice(2)
const Controller = require('./Controllers/Controller')

switch (input[0]) {
    case 'getfullname':
        Controller.fullname(input[1])
        break;
    case 'getage':
        Controller.getage(input[1])
        break
    case 'getfemalestudent':
        Controller.getFemaleStudent()
        break
    case 'addStudent':
        let newStudent = {
            first_name: input[1],
            last_name: input[2],
            gender: input[3],
            birthday: input[4],
            email: input[5],
            phone: input[6],
            height: Number(input[7])
        }
        Controller.addStudent(newStudent)
    default:
        break;
}