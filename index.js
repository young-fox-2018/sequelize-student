const StudentController = require('./controllers/StudentsController')
/*
// test case for insert new record
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson@mail.us",098754631234,170)
// test case for validation unique email
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson@mail.us",098754631234,170)

// test case for validation height > 150
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson2@mail.us",098754631234,149)

// test case for validation email
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson",098754631234,170)

// test case for validation Phone length > 16
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson2@mail.us",0987546312344567,170)

// test case for validation Phone length < 10
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson2@mail.us",09875,170)

// test case for validation Phone constains letter
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson2@mail.us","0987546AB234",170)
*/

// test case for validation Phone constains non-alphanumeric
StudentController.createRecord("Williams","Dowson","male","1994-06-06","alicowson2@mail.us","09%$54631234",150)

/*
// test case show all student female
StudentController.showAllFemale()

// test case show all fullname student
StudentController.showFullName()

// test case show all age student
StudentController.showAge()
*/