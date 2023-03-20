const todoModel = require("../DB/models/todoModel")
const mongoose = require('mongoose');
class TODO{
    static getTasksByStatus = async(req,res)=>{
        try {
            const taskStatus = req.query.status
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
            const tasks = await todoModel.find({userId})
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
        try { 
            const taskId = req.params.id
            const taskDeleted = await todoModel.findByIdAndDelete(taskId);
            res.status(200).send({
                apiStatus:true,
                message:"Task deleted Successfully"
            })             
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                message:e.message
            })
        }
    }
    static editTask = async(req,res)=>{
        try {
            const taskId = req.params.id;
            const editedTask = await todoModel.findByIdAndUpdate(taskId,req.body)
            editedTask.save();
            res.status(200).send({
                apiStatus:true,
                message:"Task was edited successfully"
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
module.exports = TODO;