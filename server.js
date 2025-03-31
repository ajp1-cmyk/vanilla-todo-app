const express = require('express');
const path = require('path');
const connectDB = require('./database/db');
const routes = require('./route');

const app = express();
const port = 3000;

//Db connection
connectDB();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use('/',routes);

// server start
app.listen(port,()=>{
	console.log(`listening to port ${port}`);
})
