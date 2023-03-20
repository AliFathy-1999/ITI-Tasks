const userModel = require("../DB/models/userModel")
class USER{
    static register = async(req,res)=>{
        try {
            const user = new userModel(req.body);
            await user.save();
            res.status(200).send({
                apiStatus:true,
                message:"User added Successfully"
            })            
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static users = async(req,res)=>{
        try {
            const userFname = await userModel.find({}).select("firstName -_id");
            res.status(200).send({
                apiStatus:true,
                data:userFname,
                message:"Get user first name successfully :)"
            })   
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static deleteUser = async(req,res)=>{
        try { 
            const userId = req.params.id;
            const deletedUser = await userModel.findByIdAndDelete(userId);
            res.status(200).send({
                apiStatus:true,
                message:"User deleted Successfully"
            })             
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })
        }
    }
    static editUser = async(req,res)=>{
        const userId = req.params.id;
        const editedUser = await userModel.findByIdAndUpdate(userId,req.body)
        editedUser.save();
       try {
            res.status(200).send({
                apiStatus:true,
                user:req.user,
                message:"User was edited successfully"
            })            
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
}
module.exports = USER;