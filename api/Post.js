import mongoose from 'mongoose';

let Schema =mongoose.Schema;

const PostSchema = Schema({
	"content": {type:String, required:true}
});

export default mongoose.model('post',PostSchema);