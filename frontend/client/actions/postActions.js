import axios from 'axios';

export const fetchPosts = () => {
	return dispatch => {
		axios.get("http://localhost:8080/")
		.then(res => {
			dispatch(setPosts(res.data.posts));
		});
};
}

export const setPosts = (posts) => {
	return {
		type:"SET_POSTS",
		payload:posts
	};
}