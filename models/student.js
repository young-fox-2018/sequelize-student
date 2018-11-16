
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10 - 13'
        },
        isAlpha: {
          args: false,
          msg: 'Phone could not contain letter'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone could not contain non-alphanumeric'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email ga beres cuy'
        }
        ,
        isEvent(value) {
          return Student.findOne({
            email: value
          })
            .then((data) => {
              if (data) {
                throw new Error('Email harus Unik')
              }
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 151,
          msg: 'tinggi badan kurang cuy'
        }
      }
    }
  }, {});

  Student.prototype.getFullName = function() {
    return this.first_name + ' ' + this.last_name
  }

  Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthday.getFullYear()
  }

  Student.getFemaleStudents = function () {
    // return params.filter((e) => {
    //   return e.gender == 'female'
    // })

    return Student.findAll({
      where : {
        gender: 'female'
      }
    })
      .then(data => {
        data = data.map(e => {
          e.dataValues.full_name = e.getFullName()
          return e.dataValues
        })
        return data
      })
      .catch(err => {
        return err
      })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};