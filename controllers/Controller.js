const Model = require('../models')
const Students = Model.Student
const View = require('../views/View')

class Controller {

    static getFullName() {
        Students.findAll()
        .then(success=>{
            const data = success.map(x => x.getFullname())
            View.displaySuccess(data)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
    static getAge() {
        Students.findAll()
        .then(success=>{
            const data = success.map(x => x.getAge())
            View.displaySuccess(data)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }

    static create(params){
        Students.create({
            first_name: params[0],
            last_name: params[1],
            gender: params[2],
            birthday: params[3],
            email: params[4],
            phone: params[5],
            tinggi_badan : params[6]
        })
        .then(success=>{
            View.displaySuccess("Berhasil menambahkan data")
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static getFemaleStudents() {
        Students.getFemaleStudents()
        .then(success=>{
            View.displaySuccess(success)
        })
        .catch(err=>{
            View.displayError(err)
        })
    }
}

module.exports = Controller