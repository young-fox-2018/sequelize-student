'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {type:DataTypes.STRING,
            validate: {
              isEmail:{
                args:true,
                msg:`invalid email address`
              },
              isUnique(value) {
                return Student.findOne({where:{email:value}})
                  .then(data => {
                    if (data) {
                      throw new Error('email has been register, use another email for register')
                    } 
                  })
                  .catch(err => {
                    throw new Error(err)
                  })
              }
            }
          },
    phone: {type:DataTypes.STRING,
              validate:{
                isAlphanumeric: {
                  args:false,
                  msg:`Phone could not contain non-alphanumeric`
                },
                not: {
                  args:["[a-z]",'i'],
                  msg:`Phone could not contain letters`
                },
                len: {
                  args:[10,13],
                  msg:`Phone length must be 10-13`
                }
              }
            },
    height: {type:DataTypes.INTEGER,
             validate: {min:{
               args:[[150]],
               msg:`Height min is 150`
             }}
            }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`  
  }

  Student.prototype.getAge = function() {
    let realTimeYear = new Date().getFullYear()
    let dataYear = this.birthday.split('-')
    dataYear = Number(dataYear[0])
    return realTimeYear - dataYear
  }

  Student.getFemaleStudent = function() {
    return new Promise (function(resolve,reject) {
      let option = {
        gender:"female"
      }
      Student.findAll({where:option})
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