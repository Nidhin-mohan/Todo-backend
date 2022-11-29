

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// todoSchema 
const TodoSchema = new Schema ({    
    title: String,
    task :[String]
});


module.exports =mongoose.model("Todo",TodoSchema);

