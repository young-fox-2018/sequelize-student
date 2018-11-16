const { Student } = require('../models/index')
const View = require('../views/View')

class Controller {
    static getFemale(){
        Student.getFemaleStudent()
            .then(data => {
                View.showData(data)
            })
            .catch(err => {
                View.showError(err)
            })
    }
}

module.exports = Controller