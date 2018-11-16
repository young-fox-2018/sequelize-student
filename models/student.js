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
          msg: "email salah"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
        validate: {
          len: {
            args: [10,13],
            msg: "phone length must be 10-13"
          },
          isNumeric: {
            args: true,
            msg: "phone could not contain alpanumeric n letter"
          }
      }
    },
    height: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 150,
          msg: "tinggi badan siswa harus di atas 150"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  }; 

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    return (2018 - Number(this.birthday.slice(0,4)))
  }

  Student.getFemaleStudents = function(){
    return Student.findAll({
      where:{
          gender : "female"
      }
    })
    .then(data=>{
      data = data.map(element => {
        element.dataValues.full_name = element.getFullName()
        return element.dataValues
      })
      
      return data
    })
    .catch(err=>{
      throw err
    }) 
  }

  return Student;
};