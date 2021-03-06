'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admintable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
  }
  Admintable.init({
    AdminId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      
    },
    
    emailid:{
       type:DataTypes.STRING,
       allowNull:false
      },
    password:{
      type: DataTypes.STRING,
    allowNull:false
  }
  }, {
    sequelize,
    modelName: 'Admintable',
    tableName:'admintableinfo',
    timestamps:false
  });
  return Admintable;
};
