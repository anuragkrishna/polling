import React from 'react';
import express from 'express';
import {renderToString} from 'react-dom/server';
import PostList from '../client/component/PostList';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import posts from '../client/reducers/posts';
import {Provider} from 'react-redux';
import path from 'path';

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

let initialState = [{content:"Hello"}];
const store = createStore(posts, initialState, applyMiddleware(thunk));

const comp = 	<div>
					<Provider store={store}>
  						<PostList />
  			 		</Provider>;
  			 		<script type="text/javascript" src="./bundle.js"></script>	
  			 	</div>		
app.get('/', (req, res, err) => {
		let markup = renderToString(comp);
		res.send(markup);
});

app.listen(9000, err => {
	console.log("React server listening on 9000");
});