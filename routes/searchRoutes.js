const express = require("express");
const { searchTodo } = require("../controllers/searchControllers");
const router = express.Router();

 router.get("/serchTodo/:key", searchTodo);


  module.exports = router;