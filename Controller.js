const View = require('./View')
const Model = require('./models')
const Student = Model.Student

class Controller {
  static execute(input) {
    switch (input[0]) {
      case "getFullName": Controller.getFullName() ;break;
      case "getAge": Controller.getAge() ;break;
      case "getFemaleStudent": Controller.getFemale() ;break;
      case "create":Controller.create(); break;
      default:
        break;
    }
  }

  static getFullName() {
    Student.findAll()
      .then(data => {
        let result = data.map(element => {
          return element.getFullName()
        })
        View.display(`Success diplaying fullname :`,result)
        process.exit()
      })
      .catch(err => {
        View.display(`Error in displaying full name :` , err)
        process.exit()
      })
  }

  static getAge() {
    Student.findAll()
      .then(data => {
        let result = data.map(element => {
          return element.getAge()
        })
        View.display(`Success displaying age :` , result)
        process.exit()
      })
      .catch(err => {
        View.display(`Error in displaying age :` , err)
        process.exit()
      })
  }

  static getFemale() {
    Student.getFemaleStudents()
      .then(data => {
        View.display(`Success getting female student` ,data)
        process.exit()
      })
      .catch(err => {
        View.display(`error getting female student`,err)
        process.exit()
      })
  }

  static create(){
    let obj = {
      first_name: "Nikos",
      last_name: "Friesen",
      gender: "female",
      birthday: "1998-10-25",
      email:"agustina_braun@wintheiser.info",
      phone:"449.89dskdijj997.7415",
      createdAt: new Date(),
      updatedAt: new Date(),
      height: 130
     }
    Student.create(obj)
      .then(data =>{
        View.display(`Succes adding data into ${input[0]}` , data.dataValues)
        process.exit()
      })
      .catch(err => {
        err.errors.forEach(element => {
          console.log(element.message)
          
        });
        process.exit()
      })
  }
}

module.exports = Controller