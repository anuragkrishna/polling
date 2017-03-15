import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import posts from '../reducers/posts';
import PostList from './PostList';

let initialState = [{content:"Hello"}];
const store = createStore(posts, initialState, applyMiddleware(thunk));

const comp = <Provider store={store}>
  				<PostList />
  			 </Provider>;


ReactDOM.render(comp, document.getElementById("root"));