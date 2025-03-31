const express = require("express");
const TodoModel = require('./database/models')

// route mechanism
const router = express.Router();

//home page
router.get("/", (req, res) => {
  res.json({
    "msg":"home page"
  });
});

// get todos
router.get("/todos", (req, res) => {
  const todos = TodoModel.find({});
  console.log(todos);
  res.json({
    "msg":"data collected"
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

  TodoModel.create(todoData).then(() => {
    console.log("todo created");
  });

  res.send("body handled");
});

module.exports = router;
