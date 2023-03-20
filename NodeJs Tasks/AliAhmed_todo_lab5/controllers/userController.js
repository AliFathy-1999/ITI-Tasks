const User = require("../DB/models/userModel")
class USER{
    static register = async(req,res)=>{
            const user = await User.create(req.body);
            const token = await user.generateToken();
            res.status(200).send({
                apiStatus:true,
                data:{
                    user,
                    token
                },
                message:"User added Successfully"
            })            
    }
    static login = async(req,res)=>{
            const { body : { username, password } } = req
            const user = await User.login(username,password);
            const token = await user.generateToken();
            res.status(200).send({
                apiStatus:true,
                data:{
                    user,
                    token
                },
                message:"User added Successfully"
            })            
    }
    static getUsersFname = async(req,res)=>{
            const userFname = await User.findByFname();
            res.status(200).send({
                apiStatus:true,
                data:userFname,
                len,
                message:"Get user first name successfully :)"
            })   
    }
    static deleteUser = async(req,res)=>{
            const userId = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);
            res.status(200).send({
                apiStatus:true,
                message:"User deleted Successfully"
            })             
    }
    static editUser = async(req,res)=>{
        const id = req.params.id;
        if(id != req.user._id){ 
            throw new Error("UnAuthorized User"); 
        }
        const { username, firstName,lastName } = req.body;
        const editedUser = await User.findByIdAndUpdate(id,{ username, firstName,lastName })
        editedUser.save();
            res.status(200).send({
                apiStatus:true,
                message:"User was edited successfully"
            })            
    }
    static getMe = (req, res)=>{ res.json(req.user) }
}
module.exports = USER;