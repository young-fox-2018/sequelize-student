'use strict';
const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique(value){
           return Student.findAll({
            where:{
              email: value
            }
          })
          .then(data => {
            // console.log(" =====> ",data)
            if(data.length !== 0){
            throw new Error(`Email is registered`)
          }})
          .catch(err => { throw new Error (err) })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        is: /^[0-9]*$/i,
        len: [10,13], 
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min: 150
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    let result = this.first_name +" "+ this.last_name

    return result
  }

  Student.prototype.getAge = function(){
    let result = new Date().getFullYear() - this.birthday.getFullYear()

    return result
  }

  Student.getFemaleStudents = function(){
    return new Promise(function(resolve, reject) {
      Student.findAll({where:
        {gender: "female"}
      })
      .then(students => {
       resolve(students)
      })
      .catch(err => reject(err))
    })
    
  }

  return Student;
};