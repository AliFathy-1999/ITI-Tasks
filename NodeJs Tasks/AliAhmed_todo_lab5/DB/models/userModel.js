const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,       
    }
},{
    timestamps:true
})
schema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
schema.pre('save',async function (){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcryptjs.hash(user.password,10);
    }
})
schema.statics.findByFname = async function(){
    const userFname = await this.find({}).select("firstName -_id");
    return userFname;
}
schema.statics.login = async function(username,password){
    const userData = await userSchema.findOne({username});
    if(!userData) throw new Error("Invalid username");
    const isMatched= await bcryptjs.compareSync(password,userData.password)
    if(!isMatched) throw new Error("Invalid Password");
   return userData;
}
schema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
    return token;
}
const userSchema = mongoose.model("User",schema)
module.exports = userSchema;
