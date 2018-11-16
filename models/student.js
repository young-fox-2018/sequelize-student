'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      isEmail: true,
      unique:true,
      validate: {
        isUnique(value){
          return Student.findOne({where:{email:value}})
            .then(data=> {
              if(data){
                throw new Error(`Email has been used`)
              }
            })
            .catch(err=>{
              throw new Error(err)
            })
        }
      }
    },
    phone:{
      type:DataTypes.STRING,
      validate:{
        len: {args:[10,13],msg:"Length must be between 10-13"},
        isNumeric: {args:true,msg:"Must be number"},
        isAlphanumeric: {args:false, msg:"cannot contain non-Alphanumeric"}

      }
    } ,
    height:{
      type:DataTypes.INTEGER,
      validate:{
        min:{args:151, msg:'MINIMUM HEIGHT is 151'}

      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    let fullname = `${this.first_name} ${this.last_name}`
    return fullname
  }

  Student.prototype.getAge = function() {
    var month = this.birthday.getMonth()
    var day = this.birthday.getDate()
    var today = new Date();
    var age = new Date().getFullYear() - this.birthday.getFullYear()
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age
  }

  Student.getFemaleStudents = function() {
    return new Promise ((resolve , reject) => {
      Student.findAll({where:{gender:"female"}})
        .then(data => {
          let databaru = data.map(element => {
            let obj = {
              full_name: element.getFullName(),
              gender: element.gender,
              birthday: element.birthday,
              email: element.email,
              phone:element.phone
            }
            // element.full_name = element.getFullName()
            return obj
          })
          resolve(databaru)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  return Student;
};