
//need schema to work on routes
const Todo = require("../model/Todo");


//home route

exports.home = (req,res) => {
    console.log('Welcome home')
    res.send("welcome home")
};

//Create new todo

exports.createTodo = async (req, res) => {

    try {
        const {title , task } = req.body

        //checking for input fields
        if(!(title)){
            throw new Error("title reqired");
        }

        // checking for duplications
       
        const todoExist = await Todo.findOne({title})

        if (todoExist) {
            throw new Error("Todo already already Exists");
        }

        //inserting todo to database

        const todo = await Todo.create({title, task});
        res.status(201).json({
            success:true,
            message: "Todo is created succesfully",
            todo,
        })
    
    } catch (error) {
        console.log(error)
         res.status(401).json({
           success: false,
           message: err.message,
         });
    }
    
}


// get all todo

exports.gettodos = async (req, res) => {
    try {
       
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.status(200).json({
            success : true,
            todos,
        });
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}


// edit todo

exports.editTodo = async (req,res) => {
    try {
          const todoId = req.params.id;
          const { title} = req.body;
          const update = {
            title: title,
           
          };

          const todo = await Todo.findByIdAndUpdate(todoId, update,{new: true});
  
          res.status(200).json({
            success: true,
            message: "Todo is updated",
            todo,
          });
        
    } catch (error) {
          console.log(error);
          res.status(401).json({
            success: false,
            message: error.message,
          });
        
        
    }
}

// delete todo by id

exports.deleteTodo = async (req,res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json({
            success:true,
            message: "Todo is Deleted"
        })
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })
        
    }
}



