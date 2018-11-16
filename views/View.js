
class View {
    static displayError(err){
        console.log(err)
        process.exit()
    }

    static displaySuccess(message){
        console.log(message)
        // process.exit()
    }
}

module.exports = View