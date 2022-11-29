
//need schema to work on routes
const User = require("../model/Todo")

//home route

exports.home = (req,res) => {
    console.log('Welcome home')
    res.send("welcome home")
};