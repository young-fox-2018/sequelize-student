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
          msg: "Format email salah!"
        },
        isEmail(value) {
          return Student.findOne({
            where: {
              email: value
            }
          }).then(function (data) {
            if (data) throw new Error(`Email sudah ada ${data.first_name}`)
          }).catch(err => { throw err })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Phone length must be 10 - 13"
        },
        isNumeric: {
          args: true,
          msg: "harus angka"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  // instance method get full name
  Student.prototype.getFullName = function () {
    // return `${this.first_name} ${this.last_name}`
    return this.first_name + ' ' + this.last_name
  }
  //instance method get Age
  Student.prototype.getAge = function () {
    let year = new Date
    let age = year.getFullYear() - Number(this.birthday.slice(0, 4))
    return age
  }

  //class method get female students
  Student.getFemaleStudents = function () {
    return new Promise((resolve, reject) => {
      let option = { where: { gender: "female" } }
      Student.findAll(option)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  return Student;
};