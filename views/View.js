class View {

    static showError(err) {
        console.log("=========== ERROR ==============")
        console.log(err)
    }

    static showData(data) {
        console.log(data)
    }

    static showList(arr) {
        arr.forEach(item => {
            console.log(item)
        })
    }
}

module.exports = View