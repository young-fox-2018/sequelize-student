

class View {
    static getfullname(data) {
        console.log(`The fullname of student with id:${data.id} is ${data.fullname()}`)
    }
    static getage(data) {
        // console.log(data)
        console.log(`The Age of student with name: ${data.fullname()} is ${data.getAge()}`)
    }
    static getfemalestudent(data) {
        console.log(data)
    }
    static showError(err) {
        console.log(err)
    }
    static showData(input) {
        console.log(input)
    }

}
module.exports = View