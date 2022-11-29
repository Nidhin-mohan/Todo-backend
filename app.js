require("dotenv").config();
require('./config/database').connect()
const express = require("express");
const todoRoutes = require('./routes/todoRoutes')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', todoRoutes)


module.exports = app