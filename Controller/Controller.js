let Model = require(`../models`)
let Student = Model.Student

class Controller{
    static getFullName() {
        Student.findAll().then((result) => {
            let data = result.map(e => e.getFullName())
            View.viewData(data)
            
        }).catch((err) => {
            View.viewData(err)
        });
    }

    static getAge() { 
        Student.findAll().then((result) => {
            let data = result.map(function(params) {
                return params.getAge()
            })
            View.viewData(data)
            
        }).catch((err) => {
            View.viewData(err)
        });
    }

    static getFemaleStudent() {
        console.log(Student.getFemaleStudent("female"));
        
    }

    static create() {
        Student.create({
            first_name: `aziz`,
            last_name: `abdul`,
            gender: `male`,
            birthday: new Date,
            email: `uwaw@hotmail.com`,
            phone: `087782387703`,
            heigth: 130
        }).then((result) => {
            View.viewData(result)
            
        }).catch((err) => {
            View.viewData(err)
        });
    }
}

Controller.create()

module.exports = Controller