import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Post from './Post';

let app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

mongoose.connect(process.env.npm_config_MONGODB_URL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req,res,err) =>{
	Post.find({})
				 .exec()
				 .then(posts => {
				 	if(posts){
				 		res.status(200).send({posts});
				 	}else{
				 		res.status(500);	
				 	}
				 }	
			);
});

app.post('/', (req,res,err) =>{

	let post = new Post(req.body);

	post.save()
	.then((post) => {
		if(post){
			res.status(200).send({post});
		}else{
			res.status(500);
		}
	});
});

app.listen(8080, () => {
	console.log("Listening on 8080");
});