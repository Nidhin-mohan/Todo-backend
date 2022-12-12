const express = require('express')
const { home, createTodo, gettodos, deleteTodo, editTodo } = require("../controllers/todoControllers")
 
const router = express.Router();


//routes for Todo
 router.get('/', home);
 router.post("/createTodo", createTodo);
 router.get("/getTodos", gettodos);
 router.delete("/deleteTodo/:id", deleteTodo);
 router.put("/editTodo/:id", editTodo);


 module.exports = router;