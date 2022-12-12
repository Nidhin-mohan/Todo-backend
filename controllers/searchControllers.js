//need schema to work on routes
const Todo = require("../model/Todo");




exports.searchTodo = async (req, res) => {
  try {
    const key = req.params.key;
    const todos = await Todo.find(
      {
          "$or":[
            {title: {$regex: key}},
            {task: {$regex: key}},
          ]
      }
    )
   
   
    res.status(201).json({
      success: true,
      todos,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
