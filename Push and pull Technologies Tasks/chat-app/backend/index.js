const app = require('./app');
const port = 2000;

app.listen(port,()=>{
    console.log(`Starting server on port http://localhost:${port}`);
})