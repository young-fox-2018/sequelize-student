'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: {
            args: true,
            msg: "Wrong email format"
          },
          isUnique(value) {
               return Student.findOne({
                 where: {
                    email: value
                 }
               })
                .then(function(students) {
                    if (students) {
                      throw new Error('Email already exist!!')    
                    }              
                })
                .catch(function(err){
                    throw new Error(err)    
                })
          }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
          isAlphanumeric : {
            args:true,
            msg: "Phone could not contain non-alphanumeric"
          }, 
          isNumeric: {
            args:true,
            msg: " Phone could not contain letter"
          },
          len: {
            args: [10,13],
            msg: "phone length must be 10-13"
          }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate : {
          min: {
              args: 150,
              msg: "Height must be at least 150"
          }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.fullName = function() {
      return `${this.first_name} ${this.last_name}`
  }
  Student.prototype.getAge = function() {
      return new Date().getFullYear() - Number(this.birthday.slice(0,4))
  }

  Student.getFemaleStudents = function() {
      return new Promise ((resolve, reject) => {
          Student.findAll() 
            .then(function(students) {
                  let output = []
                  students.forEach(student => {
                      if (student.gender == "female") {
                        output.push({
                          name: student.fullName(),
                          age: student.getAge(),
                          gender : student.gender
                        })
                      }
                  });
                  resolve(output)
            })
            .catch(function(err) {
                reject(err)
            })

      })
  }

  return Student;
};

