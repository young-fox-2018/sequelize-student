const Model = require("../models")
const View = require("../views/view")

class studentController{

    static add(input){
        // console.log(input)
        Model.Student.create(input)
        .then(data => {View.disp(data)
        process.exit()
        })
        .catch(err => {View.dispErr(err)
        process.exit()
        })

    
    }

    static getFullName(){
        Model.Student.findAll()
        .then(data => {
            let result = data.map((element) => element.getFullName())
            View.disp(result)

            process.exit()
        })
        .catch(err => View.dispErr(err))

        
    }

    static getAge(){
        Model.Student.findAll()
        .then(data => {
            let result = data.map(element => element.getAge())
            View.disp(result)

            process.exit()
        })
        .catch(err => View.dispErr(err))
    }

    static getFemaleStudents(){
        Model.Student.getFemaleStudents()
        .then(data => {
            let result = data.map(element => {
                let obj = element.dataValues
                obj.fullName = element.getFullName()

                return obj
            })

            View.disp(result)
        })
        .catch(err => View.dispErr(err))
    }




}

module.exports = studentController