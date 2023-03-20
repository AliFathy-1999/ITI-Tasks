const express = require("express");
const fs = require("fs");
const helper = require("./helper.js");
class TODO{
    static getTasks = (req,res)=>{
        const displayTaskArray = helper.getTasks();
        const tasksArrayLen = displayTaskArray.length
        //console.log(displayTaskArray);
        try {
            /*res.status(200).send({
                data:displayTaskArray
            })*/
            res.render('todos.pug', 
            {
                pageTitle:"TODO list",
                len:tasksArrayLen,
                tasks:displayTaskArray   
            }
        )     
        } catch (error) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static getSingleTask = (req,res)=>{
        const taskId = req.params.id;
        const task = helper.getSingleTasks(taskId);
        try {
            res.render('singleTask.pug', 
            {
                pageTitle:"Single Task",
                tasks:task   
            })         
        } catch (error) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static addTasks = (req,res)=>{
        try {
            const taskBody = req.body.title
            const displayTaskArray = helper.addTask(taskBody);
            res.status(200).send({
                apiStatus:true,
                data:"Task added Successfully",
                message:"Add task Successfully"
            })            
        } catch (error) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static deleteTask = (req,res)=>{
        try {
            const taskId = req.params.id
            const deleteTask = helper.deleteById(taskId);
            res.render('todos.pug', 
            {
                pageTitle:"TODO list ",
                data:`deleteTask ${taskId}`,
                message:"Task deleted Successfully" 
            })  
             
        } catch (e) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static updateSingleTask = (req,res)=>{
        try {
            const taskId = req.params.id
            const taskBody = req.body.title
            const taskStatus = req.body.status
            const updateTask = helper.editById(taskId, taskBody,taskStatus);
            res.status(200).send({
                apiStatus:true,
                data:`Task ${taskId} edited :)`,
                message:"Tested Successfully"
            })            
        } catch (error) {
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static errorPage = (req,res)=>{
        res.render('errorPage.pug', 
        {
            pageTitle: "Page Not Found",
        }
        )
    }
}
module.exports = TODO;