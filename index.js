const argv = process.argv.slice(2)
const studentController = require('./Controllers/studentController')
const cmd = argv[0]
const input = argv.slice(1)

studentController.execute(cmd, input)