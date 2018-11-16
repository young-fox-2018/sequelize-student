class View{
    static displayError(err){
        console.log(err)
        process.exit()
    }

    static displayData(data){
        console.log(data)
        process.exit()
    }

    static displayHelp(){
        console.log("-----------help----------")
        console.log(`
        node index.js help
        node index.js create <first_name> <last_name> <gender> <birthday> <email> <phone> <height>
        node index.js getFullName
        node index.js getAge
        node index.js getFemaleStudents`
        )
        process.exit()
    }
}

module.exports = View