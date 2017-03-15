import React from 'react';
import PostBox from './PostBox';
import {fetchPosts} from '../actions/postActions';

import {connect} from 'react-redux';


class PostList extends React.Component {
	
	startPoll(){
		this.timeout=setTimeout(() => this.props.fetchPosts(),5000);
	}

	componentWillMount(){

		this.startPoll();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps){
			this.startPoll();
		}
	}

	componentWillUnmount() {
        clearTimeout(this.timeout);
    }

	render(){
		return (
				<div>
					{this.props.posts.map((post) => <PostBox post={post} key={post.content} />)}
				</div>	
		);
	}
}


function mapStateToProps(state){
	return{
		posts:state
	}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);