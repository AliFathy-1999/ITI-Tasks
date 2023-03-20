const mongoose = require('mongoose');
const schema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:8,
    },
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15,
    },
    lastName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15,
    },
    dob:{
        type:Date,       
    }
},{
    timestamps:true
})
const userSchema = mongoose.model("User",schema)

module.exports = userSchema;