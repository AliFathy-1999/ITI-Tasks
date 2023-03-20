const fs = require("fs");
const argv = process.argv; 
const [,,cmd,arg] = argv;
const { program } = require('commander');

//1- Users can add entry,
const WriteInFile = (fileName,data)=>{
    try{
        var writerStream = fs.createWriteStream(fileName);
        writerStream.write(JSON.stringify(data),'UTF8');
        writerStream.end();
    }catch(e){
        console.log("File Reseted")
    }
}
const ReadfromFile = (fileName)=>{
    let data
    try{
        var readerStream = fs.createReadStream(fileName);
        data = JSON.parse(readerStream);
        var writerStream = fs.createWriteStream(fileName);
        writerStream.write(JSON.stringify(data),'UTF8');
        if(!Array.isArray(data)) 
            throw new Error()
    }catch(e){
        data = []
        console.log("error in reading data")
    }
    return data;
}
const addTask = ()=>{

    try {
        var incId = 1;
        var task = [{}]
        task = ReadfromFile("./todolist.json");
        var last = task[task.length - 1]
        if(task.length == 0 ){
            task.push({
                id: incId, 
                title:arg,
                status:"to-do" // Bonus
            });           
            WriteInFile("./todolist.json",task)  
            console.log(`Data added to file todolist.json`);  
        }else{
            var lastId = last.id
            task.push({
                id: lastId<incId ? ++incId : lastId+=incId , 
                title:arg,
                status:"to-do" // Bonus
            });
            WriteInFile("./todolist.json",task)  
            console.log(`Data added to file todolist.json`); 
        }
    } catch (error) {
        console.log(error.message);
    }    
}
// 2 - Users Can list Entries
const listTask = ()=>{
    try {
        program
        .option('-s,--status [type]', 'Task status', 'to-do')
        program.parse();
        const options = program.opts();
        const displayTaskArray = fs.readFileSync("./todolist.json",{encoding:"utf-8"});
        const stringTask = JSON.stringify(displayTaskArray)
        const filteredArray = []
        const parseJSON = JSON.parse(displayTaskArray)
        const existed = parseJSON.findIndex(element => element.status === options.status);
        if(existed != -1){
            for (let i = 0; i < parseJSON.length; i++) {
                if(parseJSON[i].status == options.status){
                    filteredArray.push(parseJSON[i])
                }
            }
                console.table(filteredArray, ['id', 'title','status']);
                console.log('Data fetched successfully :)');        
            }
            else{
                console.table(parseJSON, ['id', 'title','status']);
            }
            return stringTask;
    } catch (error) {
        console.error(error.message);
    }

}
//3 - Users can edit their entry through the id
const editById = (id,newTask)=>{
    var status = ""
    var task = [{}]
    task = ReadfromFile("./todolist.json");
    program
    .option('-s,--status [type]', 'Task status', 'to-do')
    .option('-t [type]', 'Edited Value')
    .requiredOption('-id <type>', 'Edit by id')
    program.parse(process.argv);
    const options = program.opts();

    newTask = options.t;
    id = Number.parseInt(options.Id)

    try {
        if (options.status === "to-do") {
            status = "to-do"
        }
        else if (options.status === "in progress")
        { 
            status = "in progress"
        }
        else if(options.status === "done"){
            status = "done"
        } 
        else {
            throw new Error(`Error in editing task data : Task status should be done, in pogress or to-do`);
        }
        if(newTask =="" || newTask ==" " || newTask == undefined){
            throw new Error("Error : Enter empty string !!!")
        }
        const existed = task.findIndex(element => element.id === id);
        console.log("existed : " + existed);
        if(existed>0){
            for(let i=0;i<task.length;i++){
                if(task[i].id === id){
                    task[i].title = newTask;
                    task[i].status = status;
                }
            }
        }else{
            throw new Error("Error : Your entered invalid id !!!")
        }
        WriteInFile("./todolist.json",task)
        console.log("Task editied successfully :)");        
    } catch (error) {
        console.log(error.message);
    }
}
// 4 - Users can delete their entry using their id
const deleteById = (id)=>{
    id = Number.parseInt(arg)
    var task = [{}]
    task = ReadfromFile("./todolist.json");
    try {
        for(let i=0;i<task.length;i++){
            if(task[i].id == id){
                delete task[i];
            }
        }
        const filteredTasks = task.filter(element => element !== null);
        WriteInFile("./todolist.json",filteredTasks)
        console.log("Task Deleted Successfully :)");        
    } catch (error) {
        throw new Error("Error in Removing Task")
    }
}



switch (cmd) {
    case "add":
        addTask();
        break;
    case "list":
        listTask();
        break;
    case "edit":
        editById();
        break;
    case "delete":
        deleteById();
        break;           
    default:
        console.log("Unknown command ");
        break;
}

module.exports = {
    ReadfromFile,
    WriteInFile,
    addTask,
    deleteById,
    editById,
    listTask
}