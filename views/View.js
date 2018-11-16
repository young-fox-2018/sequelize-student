class View {
    static displayError (err) {
        console.log('========ERROR======')
        console.log(err)
        console.log('===================')

    }

    static displayMsg(msg) {
        console.log('============ YOUR RESULT ===========')
        console.log(msg)
        console.log('====================================')

    }
}

module.exports = View