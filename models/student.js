'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: 
    {
      type: DataTypes.STRING,
      validate: 
      {
        isEmail: true,
        isUnique(input) {
          return Student.findOne({
            where:{email: input}
          }).then(data => {
            if(data){
              throw new Error("Email has been used!")
            }
          })
          .catch(err => {
            throw new Error(err)
          })
        }
      }
    },

    ["tinggi badan"]: {
      type: DataTypes.INTEGER,
      validate: { min: 151 }
    },
    phone: DataTypes.STRING
  }, {});

  
  Student.prototype.getFullName = function(){
    return this.first_name + " " + this.last_name
  }

  Student.prototype.getAge = function(){
    let bdayYr = Number(this.birthday.slice(0,4))
    let now = new Date().getFullYear()
    return now - bdayYr 
  }

  Student.getFemaleStudents = function () {
    return new Promise(function(resolve, reject){
      Student.findAll()
       .then(students => {
        let femaleStudents = students.filter(female => female.gender === "female")
        let res = femaleStudents.map(femaleStudent =>{
          let obj = 
          {
            fullName: femaleStudent.getFullName(),
            gender: femaleStudent.gender,
            age: femaleStudent.getAge(),
            email: femaleStudent.email,
            phone: femaleStudent.phone
          }
          return obj
        })
        resolve(res)
       })
      .catch(err =>{
        reject(err)
      })
    })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student
};