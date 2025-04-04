const express = require('express');
const path = require('path');
const connectDB = require('./database/db');
const routes = require('./route');

const app = express();
const port = 3000;

//Db connection
connectDB();

// view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use('/api',routes);

//default
app.get('/',(req,res)=>{
	res.json({"msg":"landing page under construction"})
})

// server start

app.listen(port,()=>{
	console.log(`listening to port ${port}`);
})
