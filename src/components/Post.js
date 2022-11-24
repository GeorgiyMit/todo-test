import React from "react";

const Post = function(props){
	return(
  <div className="post">
<div className="post_content">
<h2>{props.post.title}</h2>
	<div className="post_text">
	<span>{props.number}</span>
	<p className="post-descr">
		{props.post.descr}
	</p>
	<p>Сделать до <time datetime="2022-11-27 19:00">{props.post.time}</time> </p>
	</div>
</div>
<div className="post_btns">
	<button>Удалить</button>
	<button>Редактировать</button>
	<input name="myFile" type="file"/>
	
</div>
  </div>
	)
}
export default Post;