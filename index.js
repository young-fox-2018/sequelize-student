const Student = require('./controllers/StudentController')
const argv = process.argv.slice(2)

switch (argv[0]) {
    case 'getFullName':
        Student.getFullName()
        break;

    case 'getAge':
        Student.getAge()
        break;

    case 'getFemale':
        Student.getFemale()
        break;

    case 'create':
        Student.create('bintang', 'aji', 'male', '13-00-05', 'fayrunlfon.biz', '17727', 151)    
    default:
        break;
}