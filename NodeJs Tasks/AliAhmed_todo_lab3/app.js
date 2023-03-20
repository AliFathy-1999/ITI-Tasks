const express = require('express')
const path = require('path');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'pug')

app.set("views", path.join(__dirname, "views"));
//app.set("views", path.join(__dirname,"public"));
const userRoutes=require("./routes/todoRoutes.js")
app.use(userRoutes);

module.exports = app;