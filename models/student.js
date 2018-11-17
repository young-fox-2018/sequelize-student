'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: 
      {
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
          notNull: true,
          notEmpty: true,
        }
      },
    last_name:  
    {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
        notEmpty: true,
      }
    },
    gender: 
    {
      type: DataTypes.STRING,
      validate: {
        isIn: [['male', 'female']]
      }
    },
    birthday: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
      validate: {
        isEmail : {
          args: true,
          msg: 'Please input the correct email format'
        },
        len : [ 2, 50 ],
        isUnique(value) {
          return Student.findOne({
            email: value
          })
            .then((data) => {
              if (data) {
                throw new Error('Email has been used')
              }
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
        len : {
          args: [ 10, 13 ],
          msg: `Phone length must be 10 - 13`
        },
        isAlpha: {
          args: false,
          msg: `Phone could not contain letters`
        },
        isAlphanumeric: {
          args: true,
          msg: `Phone could not contain non-alphanumeric`
        }
      }
    },
    height: 
    {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 140,
        max: 210,
      }
    },
  }, {});

  Student.prototype.getFullName = function() {
    return this.first_name + " " + this.last_name;
  }

  Student.prototype.getAge = function() {
    let now = new Date();
    let age = now.getFullYear() - Number(this.birthday.substring(0,4));
    return age;
  }

  Student.getFemaleStudents = function() {    
    return new Promise ((resolve, reject) => {
      Student.findAll( {where: {gender: 'female'}})
      .then(students => {
        let femaleStudents = students.map(student => {
          let newObj = {}
          newObj.fullName = student.getFullName();
          newObj.gender = student.gender;
          newObj.birthday = student.birthday;
          newObj.email = student.email;
          newObj.phone = student.phone;
          newObj.height = student.height;
          return newObj;
        });
        resolve(femaleStudents);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};