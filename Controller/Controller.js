let Model = require(`../models`)
let Student = Model.Student

class Controller{
    static getFullName() {
        Student.findAll().then((result) => {
            let data = result.map(e => e.getFullName())
            console.log(data);
            
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAge() { 
        Student.findAll().then((result) => {
            let data = result.map(function(params) {
                return params.getAge()
            })
            console.log(data);
            
        }).catch((err) => {
            console.log(err);
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
            console.log(result);
            
        }).catch((err) => {
            console.log(err);
        });
    }
}

Controller.create()

module.exports = Controller