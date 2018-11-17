let argv = process.argv.slice(2)
const Controller = require ('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-5/sequelize-student/controllers/controller.js')

switch (argv[0]) {
  case 'add':
    Controller.add(argv.slice(1))
    break;
  case 'showgirls' :
    Controller.getladys()
      break
    case 'showall' :
      Controller.findAll()
        break
  default:

}
// student
