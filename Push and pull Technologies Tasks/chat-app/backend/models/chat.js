const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
        trim:true,
        minLength: 3,
        maxLength: 255,
    },
},{timestamps:true})

const Chat = mongoose.model('chat',schema);

module.exports = Chat;