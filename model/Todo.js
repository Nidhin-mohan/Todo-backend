

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// todoSchema 
const TodoSchema = new Schema({
  title: {
    type: String,
    require: [true, "Name required"],
    trim: true,
    maxlenghth: [25, "name must be 25 Ch long"],
  },
  task: {
    type: [String],
    trim: true,
    maxlenghth: [30]
  },
  
},  
{ timestamps: true });


module.exports =mongoose.model("Todo",TodoSchema);

