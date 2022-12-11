require("dotenv").config();
require('./config/database').connect()
const express = require("express");
const todoRoutes = require('./routes/todoRoutes')
const taskRoutes = require('./routes/taskRoutes')
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/todo', todoRoutes)
app.use('/todo', taskRoutes)


module.exports = app