const View    = require ("/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-5/sequelize-student/views/view.js")
const Model   = require ("/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-5/sequelize-student/models/index.js")
class Controller {
  static findAll(){
    Model.student.findAll()
                 .then(student=>{
                   let arr=[]
                     student.forEach(function(element){
                     // console.log(element.getage())
                     arr.push(element.getfullname())
                   })
                   console.log(arr)
                   process.exit()
                 })
  }
  static getladys(){
  Model.student.getFemaleStudents()
    .then(student=>{
      student.forEach(element=>{
        console.log(element.first_name)
      })
      process.exit()
    })

  }
  static add(params){
    let obj ={
      first_name  : params[0],
      last_name   : params[1],
      gender      : params[2],
      birthday    : params[3],
      email       : params[4],
      phone       : params[5],
      height      : params[6]
    }
    // console.log(obj)
    Model.student.create(obj)
    .then(function(data){
      // console.log(data)
      process.exit()
    })
    .catch(function(err){
      console.log(err.message)
        process.exit()
    })
    // console.l(obj)

  }

}
// console.log
// Contro.add()
module.exports = Controller
