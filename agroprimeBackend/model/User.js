const mongoose = require('mongoose');

const userData=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phoneno:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('User',userData);