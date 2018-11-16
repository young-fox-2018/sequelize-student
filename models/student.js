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
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [[10,13]],
          msg: "Phone length must be 10-13"
        },      
        isNumeric: {
          args: [[true]],
          msg: "Phone could not contains letter"
        },
        isAlphanumeric: {
          args: [[true]],
          msg: "Phone could not contain non-alphanumeric"
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function () {
    let bornYear = this.birthday.split("-")
    let age = 2018 - bornYear[0]
    return age
  }

  Student.getFemaleStudent = function() {
    // let option = {
    //   where: {
    //     gender: "female"
    //   }
    // }
    // return Student.findAll(option)

    return new Promise(function (resolve, reject) {
      let option = {
        where: {
          gender: "female"
        }
      }
      Student.findAll(option)
        .then(data => {
          data.forEach(item => {
            item.dataValues.fullName = item.getFullName()
          })
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  return Student;
};