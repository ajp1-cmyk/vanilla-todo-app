const express = require("express");
const TodoModel = require('./database/models')
const z = require('zod');

// middleawares
let visited = 0;
function visitCountMiddleware(req,res,next){
  visited +=1;
  console.clear()
  console.log("visited: ",visited);
  next();
}

function inputValidation(obj){
  const schema = z.object({
    title: z.string(),
    content: z.string()
  })
  return schema.safeParse(obj);
}


function loginValidation(obj){
  const schema = z.object({
    username: z.coerce.string().email(),
    password: z.coerce.string().min(8)
  })
  return schema.safeParse(obj);
}

// route mechanism
const router = express.Router();


// get todos
router.get("/todos", visitCountMiddleware,async (req, res) => {
  const todos = await TodoModel.find({});

  res.render('./pages/todo.ejs',{todos: todos})
});

// add todo
router.post("/todos/add", (req, res) => {

  const response = inputValidation({
    title: req.body.title,
    content: req.body.content,
  });

  res.send({response});
  return;

  postData(response.data,res);
});

// login handler / route
router.post('/login',(req,res)=>{
  const response = loginValidation(req.body);
  if(!response.success){
    res.status(411).json({msg:"wrong credentials"})
    return
  }
  res.status(200).json({msg:"authenticated"});
})

// handlers
async function postData(todoData,res){
  await TodoModel.create(todoData);
  res.json({
    "msg" :"data posted"
  })
}

module.exports = router;
