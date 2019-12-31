'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,

    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : true,
        isUnique(value) {
          return Student.findAll({
            where : {
              email : value
            }
          }).then(data => {
              if(data) {
                throw new error("Email already exist!");
              }
          })
          .catch(err => {
            throw new error(err)
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        isAlphanumeric: true,
        len: [10, 13]
      }
    },
    heigth: DataTypes.INTEGER
  }, {});

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    let time = new Date();
    let year = time.getFullYear();
    let birthday = Number(this.birthday.slice(0, 4))

    return (year - birthday)
  }

  Student.getFemaleStudents = function() {
    return Student.findAll({
      where: {
        gender : "female"
      }
    })
    .then(data => {
      let studentData = data.map(element => {
        element.dataValues.full_name = element.getFullName()
        return element.dataValues
      })
      return studentData
    }).catch(err => {
        throw err
    })
  }
  return Student;
};