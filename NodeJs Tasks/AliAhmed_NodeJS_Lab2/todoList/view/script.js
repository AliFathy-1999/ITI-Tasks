
    const taskDiv = document.getElementById("div-task");
    const fetchTasks = async()=>{
    try {
        const fetchRequest = await fetch('http://localhost:3000/tasks');
        const tasks = await fetchRequest.json(); 
        taskDiv.innerHTML= ''
        if(tasks.length>0){
            console.log(tasks.length);
            for (let i = 0; i < tasks.length; i++) {
                let div = document.createElement("div")
                let dl = document.createElement("dl")
                let dd = document.createElement("dd")
                let h2 = document.createElement("h2")
                h2.innerHTML = `Task title : ${tasks[i].title}`
                dd.innerHTML = `Task status : ${tasks[i].status}`
                div.classList.add("div-task")
                dl.append(h2);
                dl.append(dd);
                div.append(dl)
                taskDiv.append(div)
        }
    }else{
        console.log(tasks.length);
        let h1 = document.createElement("h1")
        h1.innerHTML = `There is no tasks added !`
        h1.style.cssText=`text-align:center;color:red;background-color:#F8D7DA;padding:2%;border-radius:0.5em;`
        document.body.append(h1)
    }
    } catch (error) {
        console.log(error.message);
    }
    
}
fetchTasks();
