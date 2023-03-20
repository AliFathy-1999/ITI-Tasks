const mongoose = require('mongoose');
const schema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
        minLength:5,
        maxLength:20,
    },
    status:{
        type:String,
        required:false,
        enum:["to-do", "in progress", "done"],
        default:"to-do"
    },
    tags:[
        {   
            type:String,
            required:false,
            default:[],
            maxLength:10
        }
    ]
},{
    timestamps:true
})
const todo = mongoose.model("todo",schema)
module.exports = todo;