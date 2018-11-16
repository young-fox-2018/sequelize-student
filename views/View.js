class View {
    static display(data) {
        console.log(data);
        process.exit()
    }

    static displayErr(err) {
        console.log(err);
        process.exit()
    }
}

module.exports = View