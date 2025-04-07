const express = require('express');
const app = express();
const port = 3001;

app.get('/checks',(req,res)=>{

	//without middlewares
	const username = req.headers.username;
	const password = req.headers.password;
	const ids = req.query.ids;

	// if(username!='admin' || password!='admin'){
	// 	res.status(400).json({msg:"check your credentials"});
	// 	return;
	// }

	// if(id!=1 && id!=2){
	// 	res.status(400).json({msg:"check your id"});
	// 	return;
	// }
	const len = ids.length;
	res.json({msg:"data is fine"});

})

app.use((err,req,res,next)=>{

	res.status(500).json({
		msg:"internal server error"
	})
})

app.listen(port,()=>{
	console.log(`listening to port ${port}`);
});


