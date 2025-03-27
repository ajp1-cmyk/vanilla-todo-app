const express = require('express');
const path = require('path');


// setting up server using express
const app = express();
const port = 3000;
app.use(express.static('public'));

// various apis
app.get('/',(req,res)=>{
	//  console.log(req);
	res.send('welcome to local server site 🚀 ');
})

// apis for todo
app.get('/todos',(req,res)=>{
	// get data from database
	// populate  html
	// return html
})

app.get('/todos/add',(req,resr)=>{
	// add data to database
	// append data to existing to do datas
	// populate html again
	// return html
})


app.get('/archive',(req,res)=>{
	//  console.log(req);
	res.sendFile(path.join(__dirname,'/public/index.html'));
})

// <--------------------api --- section -------------end------------->


// exposing server
app.listen(port,()=>{
	console.log(`listening to port ${port}`);
})
