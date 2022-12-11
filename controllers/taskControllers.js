//need schema to work on routes
const Todo = require("../model/Todo");

// get all todo

exports.getTask = async (req, res) => {
    try {
      const tasks = await User.find().task;

      res.status(200).json({
        success: true,
        tasks,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
}

// add a task 

exports.createTask = async (req, res) => {
        

    try {
      const todoId = req.params.id;
      const {  task } = req.body;
      console.log("task from user", task);
      if(!task){
        console.log("task not added")
        res.send("task not added");
      }
      const todo = await Todo.findByIdAndUpdate(todoId, {
      $push:{
        task :task,
      }
      });
     res.status(201).json({
       success: true,
       todo,
     });
    

        
    } catch (error) {
         console.log(error);
         res.status(401).json({
           success: false,
           message: err.message,
         });
    }
}

//delete task

exports.deleteTask = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { task } = req.body;
    console.log("task from user", task);
    if (!task) {
      console.log("task not added");
      res.send("task not added");
    }
    const todo = await Todo.findByIdAndUpdate(todoId, {
      $pull: {
        task: task,
      },
    });
    res.status(201).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
