const fs = require("fs");
var path = "./models/todolist.json";
function createFile(){
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path,"[]");   
    }
}
//1- Users can add entry,
const WriteInFile = (fileName,data)=>{
    try{
        fs.writeFileSync(fileName,JSON.stringify(data));
    }catch(e){
        console.log("File Reseted")
    }
}
const ReadfromFile = (fileName)=>{
    let data
    try{
        data = JSON.parse(fs.readFileSync(fileName));
        fs.writeFileSync(fileName,JSON.stringify(data));
        if(!Array.isArray(data)) 
            throw new Error()
    }catch(e){
        data = []
    }
    return data;
}
const addTask = (taskTitle)=>{
    //node index.js add "To do entry"
    try {
        var incId = 1;
        var task = [{}]
        task = ReadfromFile(path);
        var last = task[task.length - 1]
        createFile();
        if(taskTitle !="" && taskTitle !=" " && taskTitle != undefined){
            if(task.length == 0 ){
                console.log('test1');
                task.push({
                    id: incId, 
                    title:taskTitle,
                    status:"to-do" // Bonus
                });           
                WriteInFile(path,task)  
                console.log(`Data added to file todolist.json`);  
            }else{
                var lastId = last.id
                task.push({
                    id: lastId<incId ? ++incId : lastId+=incId , 
                    title:taskTitle,
                    status:"to-do" // Bonus
                });
                WriteInFile(path,task)  
                console.log(`Data added to file todolist.json`); 
            }
        }else{
            throw new Error("Error: Entered invaled argument");
        }
    } catch (error) {
        console.log(error.message);
    }    
}
// 2 - Users Can list Entries
const getTasks = ()=>{
    try {
        const displayTaskArray = fs.readFileSync(path,{encoding:"utf-8"});
        const filteredArray = []
        const parseJSON = JSON.parse(displayTaskArray)
            for (let i = 0; i < parseJSON.length; i++) {
                filteredArray.push(parseJSON[i]);
            }  
            return filteredArray;
    } catch (error) {
        console.error(error.message);
    }
}
const getSingleTasks = (id)=>{
    try {
        const displayTaskArray = fs.readFileSync(path,{encoding:"utf-8"});
        const parseJSON = JSON.parse(displayTaskArray);
        const existed = parseJSON.findIndex(element => element.id == id);
            if(existed != -1 && id != undefined){
                console.log("existed " + existed);
                for (let i = 0; i < parseJSON.length; i++) {
                    if(parseJSON[i].id == id) {
                        return parseJSON[i];
                    }
                }
            }else{
                throw new Error("Invalid id !!");
            }
           
    } catch (error) {
        console.error(error.message);
    }
}
//3 - Users can edit their entry through the id
const editById = (id,newTask,newStatus)=>{
    // node index.js edit -s "done" -t "Edited title" -id 2
    var status = ""
    var task = [{}]
    task = ReadfromFile(path);
    id = Number.parseInt(id)
    try {
        if(newTask =="" || newTask ==" " || newTask == undefined){
            throw new Error("Error : Enter empty string !!!")
        }
        const existed = task.findIndex(element => element.id === id);
        console.log("existed : " + existed);
        if(existed !=-1){
            for(let i=0;i<task.length;i++){
                if(task[i].id == id){
                    task[i].title = newTask;
                    task[i].status = newStatus;
                }
            }
        }else{
            throw new Error("Error : Your entered invalid id !!!")
        }
        WriteInFile(path,task)
        console.log("Task editied successfully :)");        
    } catch (error) {
        console.log(error.message);
    }
}
// 4 - Users can delete their entry using their id
const deleteById = (id)=>{
    // node index.js delete 6
    id = Number.parseInt(id)
    var task = [{}]
    task = ReadfromFile(path);
    try {
        for(let i=0;i<task.length;i++){
            if(task[i].id == id){
                delete task[i];
            }
        }
        const filteredTasks = task.filter(element => element !== null);
        WriteInFile(path,filteredTasks)
        console.log("Task Deleted Successfully :)");       
    } catch (error) {
        throw new Error("Error in Removing Task")
    }
}

module.exports = {
    addTask,
    getTasks,
    editById,
    deleteById,
    getSingleTasks
}
