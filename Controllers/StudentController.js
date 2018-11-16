const Model = require('../models')
const View = require('../Views/View')
const Student = Model.Student

class StudentController {
    static getFullName(){
        Student.findAll()
            .then((data) => {
                let datastudent = data.map(student => {return student.getFullName()})
                View.display({
                    msg:"this are students fullname",
                    data: datastudent
                })
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err.errors)
                process.exit()
            })
    }
    static getAge(){
        Student.findAll()
        .then((data)=> {
            let student = data.map(age => {return age.getAge()})
            View.display({
                msg:"this are all students Age",
                result:student
            })
            process.exit()
        })
        .catch((err) => {
            View.displayErr(err)
            process.exit()
        })
    }
    static getFemaleStudents(){
        Student.getFemaleStudents()
        .then((data)=>{
            View.display({
                msg:`ini datanya`,
                student: data
            })
            process.exit()
        })
        .catch((err)=>{
            View.displayErr(err)
            process.exit()
        })
    }
    static create(){
        Student.create({
            first_name:"venecia",
            last_name:"calista",
            gender:"female",
            birthday: "2000-08-03",
            email: "doug@roberts.biz",
            phone:"11-334a",
            CreateAt:new Date(),
            updateAt:new Date(),
            height:135
        })
            .then((data)=>{
                View.display(`data anda berhasil`)
                process.exit()
            })
            .catch((err)=>{
                err.errors.forEach(element => {
                    console.log(element.message)
                });
                process.exit()
                // console.log(err.errors[0].message)
                // View.displayErr(err)
            })
    }

}
module.exports = StudentController