const express = require('express')
var cors = require('cors')
const app = express();
require("./DB/connect.js");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const todoRoutes=require("./routes/todoRoutes.js")
const userRoutes=require("./routes/userRoutes.js")

app.use((e, req, res, next) => {
    res.status(401).send({
        apiStatus:false,
        data:e,
        message:e.message
    });
});
  

app.use(todoRoutes);
app.use(userRoutes);

module.exports = app;