const jwt = require('jsonwebtoken');
const User = require('../DB/models/userModel');

const userAuth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('bearer ', '').trim()
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)    
        const user = await User.findById(decoded._id)  
        if(!user){
            throw new Error('User Not Found')
        }
        req.user = user;    
        next()
    }catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"UnAuthorized User"
        })
    }
}
module.exports = userAuth;