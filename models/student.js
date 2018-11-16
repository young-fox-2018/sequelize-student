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
          msg: 'Missing @ or . character when create email!'
        },
        isUnique: function (email) {
          return Student.findOne({
            where: {
              email: email
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Email is already exists`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: ["[a-z]", 'i'],
          msg: `Phone could not contain letters`
        },
        len: {
          args: [10, 13],
          msg: `Phone length must between 10 - 13!`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: `Input must be a number`
        },
        min: {
          args: 150,
          msg: `Minimum height is 150`
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }
  Student.prototype.getAge = function () {
    let year = this.birthday.split('-')
    let now = new Date().getFullYear()
    let age = now - Number(year[0])
    return age
  }
  Student.getFemaleStudent = function () {
    return new Promise(function (resolve, reject) {
      let options = { where: { gender: 'female' } }
      Student.findAll(options)
        .then(function (data) {
          data.forEach(function (element) {
            element.dataValues.full_name = element.getFullName()
          })
          resolve(data)
        })
        .catch(function (err) {
          reject(err)
        })
    })
  }
  return Student;
};