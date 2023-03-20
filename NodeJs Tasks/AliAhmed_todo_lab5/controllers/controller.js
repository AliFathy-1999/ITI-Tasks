const todoModel = require("../DB/models/todoModel")
const mongoose = require('mongoose');
class TODO{
    static validate = async(id,user)=>{
        const isValid = mongoose.Types.ObjectId.isValid(id.trim());
        const taskFound = await todoModel.findById(id.trim())
        if(!isValid || !taskFound || id == "" ){
            throw new Error("Task not found")
        }
        if((taskFound.userId).toString() != (user._id).toString()){ 
            throw new Error("UnAuthorized User !!!"); 
        }
    }
    static getTasksByStatus = async(req,res)=>{
        try {
            const taskStatus = req.query.status
            // Make validation on it ***************
            const tasks = await todoModel.find({status:taskStatus})
            .limit(req.query.limit || 10)
            .skip(req.query.skip || 0);
            res.status(200).send({
                apiStatus:true,
                data:tasks,
                message:"Task fetched successfully :)"
            })   
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static getUserTask = async(req,res)=>{
        try {      
            const userId = req.params.userId
            const tasks = await todoModel.find({userId:userId})
            res.status(200).send({
                apiStatus:true,
                data:tasks,
                message:"Task fetched successfully :)"
            })  
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static addTasks = async(req,res)=>{
        try {
            const task = new todoModel(req.body);
            await task.save();
            res.status(200).send({
                apiStatus:true,
                message:"Task added Successfully"
            })            
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static deleteTask = async(req,res)=>{
            const id = req.params.id
            TODO.validate(id,req.user);
            const userDeleted = await todoModel.findByIdAndDelete(id);
            res.status(200).send({
                apiStatus:true,
                message:"Task deleted Successfully"
            })             
    }

    static editTask = async(req,res)=>{
            const id = req.params.id;
            TODO.validate(id,req.user);
            const { title,status,tags } = req.body
            const editedTask = await todoModel.findByIdAndUpdate(id.trim(),{ title,status,tags })
            editedTask.save();
                res.status(200).send({
                    apiStatus:true,
                    message:"Task was edited successfully"
                })           
    }
}
module.exports = TODO;