const Conmongoose= require('mongoose');
Conmongoose.connect("mongodb://localhost:27017/chatDB")

module.exports = Conmongoose;