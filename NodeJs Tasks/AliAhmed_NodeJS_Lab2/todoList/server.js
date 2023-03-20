const http = require('http');
const fs = require("fs");
const helper = require("./helper")
const port = 3000;
const viewPath = './view/'
const server = http.createServer(function (req, res) {
    const route = req.url.split('/')[1]
    if(req.method === "GET"){
        switch (route) {
            case "":
                res.writeHead(200, {'Content-Type': 'text/html'});
                const html = fs.readFileSync(`${viewPath}/index.html`);
                res.write(html)                 
                break;
            case "tasks":
                const todojson = fs.readFileSync('./todolist.json')
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(todojson); 
                break;
            case "astronomy":
                const data = fs.readFileSync('./assets/images/astronomyImage.jpg')                         
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.write(data);
                break;       
            case "style.css":
                const css = fs.readFileSync(`${viewPath}/style.css`);
                res.write(css);
                break;
            case "script.js":
                const script = fs.readFileSync(`${viewPath}/script.js`);
                res.write(script);
                break;
                case "404style.css":
                    const errorCss = fs.readFileSync(`${viewPath}/404style.css`);
                    res.write(errorCss);
                    break;             
            default:
                const errorPage  = fs.readFileSync(`${viewPath}/errorPage.html`);
                res.write(errorPage);
                break;
        }
        res.end();
    }
  });

  server.listen(port, function () {
    console.log(`Server Running here 👉 http://localhost:${port}`);
  })