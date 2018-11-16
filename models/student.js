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
          msg: "Email not valid"
        },
        isUnique(value) {
          return Student.findOne({
            where: { email: value }
          }).then((result) => {
            if (result) {
              throw new Error('Only new email are allowed!')
            }
          })
            .catch((err) => {
              throw new Error(err)
            });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Phone length must be 10-13"
        },
        isAlphanumeric: {
          args: true,
          msg: "Phone could not contain non alphanumeric"
        },
        isAlpha: {
          args: true,
          msg: "Phone could not contain letter"
        }
      }
    }
    ,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "Tinggi minimal 150"
        }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  //Instance method
  Student.prototype.fullName = function () {
    return `${this.first_name} ${this.last_name}`
  };
  Student.prototype.getAge = function () {
    let year = this.birthday.split("-")
    return new Date().getFullYear() - Number(year[0])
  };
  //Class Method
  Student.getFemale = function () {
    // return new Promise((resolve, reject) => {
    //   Student.findAll({
    //     where: { gender: "female" }
    //   }).then(data => {
    //     resolve(data)
    //   }).catch(err => {
    //     reject(err)
    //   })
    // })
    return Student.findAll({
      where: { gender: "female" }
    })
  }




  return Student;
};