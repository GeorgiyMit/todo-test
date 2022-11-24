import React from "react";
import Post from "./Post"
const PostList = ({posts})=>{
	return(
	<div>
		{posts.map((post, index)=>
		<Post number={index+1} post={post} key={post.id}/>)}
	</div>
	)
}
export default PostList;