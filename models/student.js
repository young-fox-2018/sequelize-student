'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email:{
      type: DataTypes.STRING ,
      validate:{
        isEmail:true,
        isUnique(value){
          return Student.findOne({
            where:{
              email:value
            }
          })
            .then((data)=>{
              if(data){
                throw new Error(`Email has been use`)
              }
            })
            .catch((err)=>{
              throw new Error(err)
            })
        }
      }
    } ,
    phone: {
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:`Phone length must be 10-13`
        },
        not:{
          args:["[a-z]",'i'],
          msg:`Phone could not contain letters`
        },
        isAlphanumeric:{
          args:false,
          msg:`Phone could not contain non-alphanumeric`
        } 
      }},
    height: {
      type:DataTypes.INTEGER,
      validate:{
        min:{
          args: 151,
          msg: 'Minimum height is 151'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }
  Student.prototype.getAge = function(){
    var month = this.birthday.getMonth()
    var day = this.birthday.getDate()
    var today = new Date()
    let age = new Date().getFullYear() - this.birthday.getFullYear()
    if(today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)){age--}
    return age
  }
  Student.getFemaleStudents = function(){
    return new Promise ((resolve,reject) => {
      Student.findAll({where:{
        gender:"female"
      }})
      .then((data)=>{
        let femaleStudent = data.map(female => {
          let obj = {}

          obj.full_name = female.getFullName()
          obj.gender = female.gender
          obj.birthday = female.birthday
          obj.email = female.email
          obj.phone = female.phone
          
          return obj
        })
       resolve(femaleStudent)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }
  return Student;
};