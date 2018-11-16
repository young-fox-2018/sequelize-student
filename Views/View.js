class View{

    static help(){
        console.log("Please provide proper command!")
    }

    static display(input){
        console.log(input)
    }

    static displayError(err){
        console.log("ERROR FOUND!")
        console.log(err)
    }
}

module.exports = View