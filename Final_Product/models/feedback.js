const mongoose=require("mongoose");

const FeedbackSchema = new mongoose.Schema({

    Role_offered:{
         type:String,
         required:true
    },
    Skills_to_work_on:{
          type:String,
          required:true
    },
    Add_mess:{
          type:String,
          required:true
    },
    // company:{
    //     type:String,
    //     required:true
    // },
    // student_name:{
    //     type:String,
    //     required:true
    // },
  
},

{timestamps: true}
);

module.exports = mongoose.model("feedback", FeedbackSchema);