const express = require("express");
const TodoModel = require('./database/models')
const path = require('path');

// route mechanism
const router = express.Router();

//home page
router.get("/", async (req, res) => {
  const data = {
    msg:"data populated"
  }
  const todos = await TodoModel.find({});

  res.render('pages/todo',{todos: todos})
});

// get todos
router.get("/todos", async (req, res) => {
  const todos = await TodoModel.find({});

  console.log(todos[0].content);
  res.json({
      todos : todos
  });
});

// add todo
router.post("/todos/add", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const todoData = {
    title: title,
    content: content,
  };
  postData(todoData,res);
});


// handlers
async function postData(todoData,res){
  await TodoModel.create(todoData);
  res.json({
    "msg" :"data posted"
  })
}

module.exports = router;
