const View = require('../views/View.js')
const Model = require("../models")
const Student = Model.Student

class ControllerStudent{
    static getFullName(){

        Student.findAll()
        .then(data=>{
            data = data.map(element => element.getFullName())
            // data = data.map(element => element.)
            View.displayData(data)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static getAge(){
        Student.findAll()
        .then(data=>{
            data = data.map(element => element.getAge())
            View.displayData(data)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static getFemaleStudents(){
        Student.getFemaleStudents()
            .then(data => {
                View.displayData(data)
            })
            .catch(err => {
                View.displayError(err)
            })
    }

    static create(options){
        let obj= {
            first_name : options[0],
            last_name : options[1],
            gender : options[2],
            birthday : options[3],
            email : options[4],
            phone : options[5],
            height : options[6]
        }
        console.log("========")
        console.log(obj)
        Student.findOne(
            {
            where: {
              email: options[4]
            }
        })
        .then(data=>{
            if(data){
                View.displayError("email sudah ada")    
            } else {
                return Student.create(obj)
                    .then(data=>{
                    View.displayData(data)
                    })
            }
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
}

module.exports = ControllerStudent