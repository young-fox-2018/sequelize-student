'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    // email: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Your email is invalid`
        },
        isUnique(value) {
          return Student.findOne({
            where: {
              email: value
            }
          })
            .then(data => {
              if (data) {
                throw new Error(`Your email has been registered in out database!`)

              }
              process.exit()
            })
            .catch(err => {
              throw err
            })
        }

      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: `Minimum length 10 & Maximum length 13`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: `Height must be fill with data type number`
        },
        min: {
          args: 150,
          msg: 'Minimum heigth of student is 150'
        }
      }
    }

  }, {});
  Student.associate = function (models) {
    // associations can be defined here

  };
  Student.prototype.fullname = function () {
    return `${this.first_name} ${this.last_name}`
  }
  Student.prototype.getAge = function () {
    let now = new Date(),
      currentYear = now.getFullYear(),
      year = this.birthday.split('-'),
      birthYear = Number(year[0])
    return `${currentYear - birthYear} tahun`
  }
  Student.getFemaleStudents = function () {
    return new Promise((resolve, reject) => {
      let option = {
        where: {
          gender: 'female'
        }
      }
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