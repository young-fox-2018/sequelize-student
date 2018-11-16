'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'email  gagal'
          }
        }
    },
    phone: {
      type: DataTypes.STRING,
        validate: {
          min: {
            args: 10,
            msg: 'min number 10'
          },
          max: {
            args: 13,
            msg: 'max number 13'
          },
          isNumeric: {
            args: true
          },
          isAlphanumeric: {
            args: true,
            msg: 'phone could not contain non alphanumeric'
          }
        }
    },
    tinggiBadan: {
      type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 150,
            msg: 'min height 150'
          }
        }
    }
  }, {});

  student.associate = function(models) {
    // associations can be defined here
  };

  student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  student.prototype.getAge = function() {
    let year = this.birthday.split('-')
    return 2018 - Number(year[0])
  }

  student.getFemaleStudent = function() {
    // return new Promise ((resolve, reject) => {
    //   let opt = {where: {gender: "female"}}
    //   student.findAll(opt)
    //     .then(data => {
    //       let students = data.map(e => e.getFullName())
    //       resolve(students)
    //     })
    //     .catch(err => {
    //       reject(err)
    //     })
    // })
    let opt = {where: {gender: "female"}}
    return student.findAll(opt)
      .then(data => {
        let students = data.map(e => e.getFullName())
        return students
      })
      .catch(err => {
        return err
      })
    }
  return student;
};