export default function posts(state=[], action={}){
	switch(action.type){
		case "SET_POSTS":{
			console.log("SET_POSTS",action.payload);
			return action.payload;
		}
		default:
      		return state;
	}
}