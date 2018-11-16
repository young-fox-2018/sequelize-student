const {Student} = require("../models/index")
const View = require("../Views/view")
class studentController {
    static displayFullNameAge() {
        Student.findAll()
            .then(function (data) {
                View.printLine(`Full Name & Age:`)
                data.map((x) => {
                    View.printLine(`${x.fullName()} ${x.getAge()}`)
                })
                process.exit()
            })
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })
    }

    static getFemaleStudents() {
        Student.getFemaleStudents()
            .then(function(result){
                View.printLine("Female Students are:")
                result.map(function(female_student) {
                     View.printLine(`Name: ${female_student.name} Age: ${female_student.age} Gender: ${female_student.gender}`)
                })
                process.exit()
            }) 
            .catch(function(err) {
                View.printError(err)
                process.exit()
            })
    }

    static addStudent(first_name, last_name, gender, birthday, email, phone, height) { 
        // buat cek validasi
        // first_name, last_name, gender, birthday, email, phone, height 
        let newStudent = new Student({
            first_name:first_name, 
            last_name:last_name, 
            gender: gender, 
            birthday: birthday, 
            email: email, 
            phone: phone, 
            height: height
        })
        newStudent.save()
            .then(function(data) {
                console.log(data, "successfully save new data")
                process.exit()
            })
            .catch(function(err) {
                console.log(err.message)
                process.exit()
            })
    }


}


// studentController.displayFullNameAge()
// studentController.getFemaleStudents()

// studentController.addStudent("Lionelo", "Messi", "Male", "1987-07-24", "lionelMessi@barca.com", "77773939", "170" )
// console.log(studentController.addStudent())

// contoh validasi kependekan
// studentController.addStudent("Cebol", "Linyo", "Male", "1987-07-24", "kumpulanCebol@pendek.com", "77773939", 120)

// contoh validasi salah email
// studentController.addStudent("friend", "ster", "unknown", "1900-12-01", "kenanganlama.gmail@com", "1234567", 400)

// wrong phone
// studentController.addStudent("rudi", "marudaii", "male", "2000-12-29", "rudimarudai@koko.com", "472683642924", 180)

// studentController.addStudent("Lionelo", "Messi", "Male", "1987-07-24", "lionelooefnoefMessi@barca.com", "101010101010", "170" )

// studentController.addStudent("Jennifer", "molly", "female", "1996-04-18", "jenniferolala@gmail.com", "1234567891012140", 180)

// studentController.addStudent("Marsupilami", "Mali", "male", "1996-04-18", "marsupilami@gmail.com", "12345678910", 180)

module.exports = studentController

