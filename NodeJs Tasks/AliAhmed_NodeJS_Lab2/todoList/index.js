const argv = process.argv; 
const [,,cmd,arg] = argv;
const helper = require("./helper.js")
switch (cmd) {
    case "add":
        helper.addTask();
        break;
    case "list":
        helper.listTask();
        break;
    case "edit":
        helper.editById();
        break;
    case "delete":
        helper.deleteById();
        break;          
    default:
        console.log("Unknown command ");
        break;
}
