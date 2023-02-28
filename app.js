require("dotenv").config();
require('./config/database').connect()
const express = require("express");
const todoRoutes = require('./routes/todoRoutes')
const taskRoutes = require('./routes/taskRoutes')
const searchRoutes = require('./routes/searchRoutes')
const cors = require("cors");
const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/todo', todoRoutes);


module.exports = app