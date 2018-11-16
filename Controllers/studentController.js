const View = require('../Views/View')
const Model = require('../models')
const Student = Model.Student

class studentController{

    static execute(cmd, input){
        switch (cmd) {

            case "add":
                Student.create({
                    first_name: input[0],
                    last_name: input[1],
                    gender: input[2],
                    birthday: input[3],
                    email: input[4],
                    phone: input[5],
                    "tinggi badan": input[6]
                })
                 .then(() => {
                     View.display(`Data ${input[0]} ${input[1]} has been succesfully added to Students`)
                 })
                 .catch(err =>{
                    //  console.log('masuk kesini')
                    err.errors.map(err =>{
                        View.displayError(err.message)
                    })
                 })
                break;
                
            case "getFullName":
                Student.findAll()
                 .then(Students => {
                     let fullNameAll = Students.map(Student => Student.getFullName())
                     View.display(fullNameAll)
                 })
                break;
                 
            case "getAge":
                Student.findAll()
                 .then(Students => {
                     let allAge = Students.map(Student => Student.getAge())
                     View.display(allAge)
                 })
                break;

            case "getFemaleStudents":
                 Student.getFemaleStudents()
                  .then(data => {
                      data.map(females => {
                          View.display(females)
                      })
                  })
                  .catch(err => {
                      View.displayError(err)
                  })
                break;
            
            default: View.help()
                break;
        }
    }
}

module.exports = studentController