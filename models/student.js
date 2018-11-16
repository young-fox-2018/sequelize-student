'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(input) {
          return Student.findAll({
            where: {
              email: input
            }
          }).then((result) => {
            if (result.length > 0) {
              throw new Error("EMAIL SUDAH ADA =======")
            }
          }).catch((err) => {
            throw new Error("EMAIL SUDAH ADA =======")
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: false,
        len: [10,13], 
      }
    },
    heigth: DataTypes.INTEGER
  }, {});

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function () {
    // return (2018 - Number(this.birthday))
    return 2018 - Number(String(this.birthday).slice(11, 15))
  }

  Student.getFemaleStudent = function (data) {
    Student.findAll({
      where: {
        gender: data
      }
    }).then((result) => {
      let data = result.map(function (params) {
        let obj = params.dataValues
        obj["full_name"] = params.getFullName()
        return obj
      })

      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};