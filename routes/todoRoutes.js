const express = require('express')
const { home, createTodo, deleteTodo, editTodo, getTodos } = require("../controllers/todoControllers")
 
const router = express.Router();


//routes for Todo
 router.get('/', home);
 router.post("/createTodo", createTodo);
 router.get("/getTodos", getTodos);
 router.delete("/deleteTodo/:id", deleteTodo);
 router.put("/editTodo/:id", editTodo);


 module.exports = router;