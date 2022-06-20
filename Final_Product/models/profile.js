const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const userSchema = new Schema({
 
//   name: {
//     type: String,
//     required:true,
//   },
  phone:{
     type:Number,
     required:false,
  },
  address:{
    type:String,
    required:false,
 },
  birthday:{
    
    type:String,
    required:false,
  },
  gender:{
   type:String,
   required:false,
  },
  iinlineRadioOptions:{
    type:String
  },
  skill1:{
    type:String
  },
  skill2:{
    type:String
  },
  skill3:{
    type:String
  }
  
},{timestamps:true});


module.exports = mongoose.model("Profile",userSchema);