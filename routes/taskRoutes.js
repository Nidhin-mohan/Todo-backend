const express = require('express')
const { createTask, deleteTask } = require("../controllers/taskControllers");

const router = express.Router();


//routes for task

router.post("/createTask/:id", createTask);
router.put("/deleteTask/:id", deleteTask);



module.exports = router;