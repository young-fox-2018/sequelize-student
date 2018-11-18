'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email address is not valid'
        },
        isUnique(value) {
          student.findOne({where: {email:value}})
            .then(function(data) {
              if (data) {
                throw new Error('Email address already in used!')
              }
            })
            .catch(function(err) {
              throw new Error(err)
            })
        }
      },
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        isNumeric: {
          args: true,
          msg: 'Phone could not contain letters'
        },
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum height is 150'
        }
      }
    }
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };

  student.prototype.getFullName = function () {
    return this.first_name+" "+this.last_name
  };

  student.prototype.getAge = function () {
    let birthYear = Number(this.birthday.slice(0,4))
    let dateNow = new Date
    return dateNow.getFullYear() - birthYear
  };

  student.getFemaleStudents = function () {
    return student.findAll({
      where: {
        gender: "female"
      }
    })
      .then(function(data) {
        let female = data.map(function(element) {
          element.dataValues.fullname = element.getFullName()
          return element.dataValues
        })
        return female
    })
      .catch(function(err) {
        return err;
      })
  };

  student
  return student;
};