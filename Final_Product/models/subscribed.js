const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var classSchema = new Schema({
    
    subs:{
        type:String,
        required: true
    }

},{timestamps:true});

module.exports = mongoose.model("Subscription",classSchema);