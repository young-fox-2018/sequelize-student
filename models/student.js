'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail: {
          args:true,
          msg :'Email yang anda masukan tidak Valid'
        },
        Unique(value){
          return student.findOne({
            where:{
              email:value
            }
          }).then(function(data){
            if(data) throw new Error (`Email sudah digunakan oleh User ${data.first_name}`)
          }).catch(function(err){
            if(err) throw err
          })
        }
      }
    },
    phone:{
      type:DataTypes.INTEGER,
      validate:{
        isNumeric:{
          args:true,
          msg :"Anda hanya boleh memasukan angka"
        },
        len: {
          args:[10,13],
          msg:"Anda memasukan Phone Number yang tidak Valid"
        }
      }
    },
    height:{
      type:DataTypes.INTEGER,
      validate:{
        min:{
          args:150,
          msg:"Minimun Tinggi seorang siswa adalah 150"
        }
      }
    }
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };

  student.prototype.getfullname = function(){
    return `${this.first_name} ${this.last_name}`
  }

  student.prototype.getage = function (){
    let date= new Date
    let year= this.birthday.slice(0,4)
    return date.getYear()+1900 - Number(year)
  }
  student.getFemaleStudents = function(){
    return student.findAll({
      where: {
        gender: "female"
      }
    })
  }

  return student;
};
