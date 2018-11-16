'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    gender: {type: DataTypes.STRING},
    birthday: {type: DataTypes.STRING},
    email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: {
          args: true,
          msg: 'email lo ga jelas bous!' 
        }
      } 
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 13],
        isAlphanumeric: true,
        isAlpha: false
      }
    },
    tinggi_badan: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
          args: 150,
          msg: 'kurang tinggi bous!'
        }
      }
    }
  }, {});

  Student.prototype.getFullName = function() {
    return this.first_name + ' ' +  this.last_name
  }

  Student.prototype.getAge = function() {
    let year = this.birthday.split('-')
    let date = new Date()
    date = date.getFullYear()
    return Number(date) - Number(year[0])
  }

  Student.getFemale = function() {
    return Student.findAll({
      where: {
        gender: 'female'
      }
    })
    .then((data) => {
      let temp = []
        data.forEach(element => {
          let obj = {
            full_name: element.getFullName(),
            birthday: element.birthday,
            gender: element.gender
          }
          temp.push(obj)
        });
        return temp
      })
      .catch((err) => {
        console.log(err)
      })
  }

  Student.associate = function(models) {
  };
  return Student;
};