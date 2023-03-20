const http = require('http');
const fs = require("fs");
const controller = require("./controller")
const port = 3000;

const server = http.createServer(function (req, res) {
    res.setHeader('content-type', 'application/json')
    //console.log();
    /*var readerStream = fs.createReadStream("./todolist.json");
    readerStream.setEncoding('UTF8');*/
    //let data = JSON.parse(readerStream);
    //const displayTaskArray = fs.readFileSync("./todolist.json",{encoding:"utf-8"});
    res.write(controller.listTask); 
    res.end();
  });

  server.listen(port, function () {
    console.log(`Server Running here 👉 http://localhost:${port}`);
  })