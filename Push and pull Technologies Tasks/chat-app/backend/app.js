const express = require('express');
const app = express();
const cors = require('cors');
require("./models/connect");
const routes = require('./routes/index');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes.chatRoute);

const errorHandler = (err, req, res, next) => {
    res.status(400).json({message: err.message});
};
app.use(errorHandler);

module.exports = app;