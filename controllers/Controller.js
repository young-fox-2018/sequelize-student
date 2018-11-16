"use strict"

const Model = require('../models/index.js')
const View = require('../views/View.js')


class Controller {
    static getFullName() {
       Model.Student.findAll()
       .then(data => {
            if (!data) {
                View.printError('No data found')
            } else {
                console.log(data)
               const result = data.map(element => element.getFullName())

               View.printData(result)
            }
       })
    }

    static getAge() {
        Model.Student.findAll()
        .then(data => {
             if (!data) {
                 View.printError('No data found')
             } else {
                const result = data.map(element => `${element.getFullName()} ${element.getAge()}`)
 
                View.printData(result)
             }
        })
    }

    static getFemaleStudents() {
        Model.Student.getFemaleStudents()
        .then(data => {
            View.printData(data)
        })
        .catch(err => {
            View.printError(err)
        })
    }

    static insertData(options) {
        let obj = {
            first_name : options[0],
            last_name : options[1],
            gender : options[2],
            birthday : options[3],
            email : options[4] || '',
            phone : options[5],
            height : options[6],
            createdAt : new Date(),
            updatedAt : new Date()
        }

        console.log(obj)

        Model.Student.create(obj)
        .then(data => {
            View.printData(data)
        })
        .catch(err => {
            View.printError(err)
        })
    }
}

module.exports = Controller