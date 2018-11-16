const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

switch (argv[0]) {
    case "studentFemale":
        Controller.getFemale()
        break;

    default:
        break;
}