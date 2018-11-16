'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      validate: {
                  isUnique: function () {
                      return Student.findOne({where: {email: this.email}})
                          .then(data=> {
                            if(data) throw new Error('Email already in use!');
                          })
                          .catch(err=>{
                            throw new Error(err)
                          })
                  },
                isEmail: {
                  args: true, msg:"email is not valid"
                }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
                    len: {args :[10,13], msg: "Phone length must be 10-13" },
                    isAlphanumeric: { args : false, msg: "Phone could not contain letters"},    
                    isNumeric: {args: true, msg  : "Phone could not contain not-alphanumeric" 
                  }
                }
    },
    tinggi_badan :{
      type: DataTypes.INTEGER,
      validate :{ 
                  min : 150
                }
    }
  }, {});

  Student.prototype.getFullname = function(){
    return [this.first_name, this.last_name].join(' ');
  };

  Student.prototype.getAge = function(){
    var birthday = +new Date(this.birthday);
    return [this.first_name, ~~((Date.now() - birthday) / (31557600000))].join(' ');
  }

  
  Student.getFemaleStudents = function(){
    return Student.findAll({
      where: {
        gender : "female"
      }
    })
    .then(success=>{
      let data = success.map(element => {
          element.dataValues.fullName = element.getFullname()
          return element.dataValues
      });
      return data
    })
    .catch(err=>{
      return err
    })
    
  }


  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};