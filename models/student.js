'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    height :  {
        type : DataTypes.INTEGER,
        validate : {
          min : 151
        }
      },
    email:  {
      type : DataTypes.STRING,
      validate : {
        isEmail : true,
        isUnique : function() {
             return Student.findOne({
              where :  {
              email : this.email
            }
            })
            .then(data => {
              if (data) {
                throw new Error('Email is not unique')
              }       
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      },

  },
    phone:  {
      type : DataTypes.INTEGER,
      validate : {
        isNumeric : true,
        isLengthValid : function() {
          console.log(this.phone.length, 'adaad')
          if (this.phone.length > 13 || this.phone.length < 10) {
              throw new Error('Phone length must be 10-13')
          }
        }
      }
    }
},{});

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    let currentYear = new Date().getFullYear()
    let birthdayYear = new Date(this.birthday).getFullYear()

    return currentYear - birthdayYear
  }

  Student.getFemaleStudents = function() {
    return Student.findAll({
            where : {
            gender: 'female'
          }
        })
        .then(data => {
          const result = data.map(element => element.getFullName())

          return result
        })
        .catch(err => {
          return err
        })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};