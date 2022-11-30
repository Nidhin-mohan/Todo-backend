require("dotenv").config();
require('./config/database').connect()
const express = require("express");
const todoRoutes = require('./routes/todoRoutes')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/todo', todoRoutes)


module.exports = app