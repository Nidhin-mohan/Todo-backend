const express = require('express')
const { home, createTodo, gettodos, deleteTodo } = require("../controllers/todoControllers")
 
const router = express.Router();


//routes for Todo
 router.get('/', home);
 router.post("/createTodo", createTodo)
 router.get("/getTodos", gettodos);
 router.delete("/deleteTodo/:id", deleteTodo);

 //routes for Task





 module.exports = router;