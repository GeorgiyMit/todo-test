import React, { useState } from "react";
import Post from "./Post";
import PostList from "./PostList";
const Form = function (props) {
    const [posts, setPosts] = useState([])
	const [title, setTitle] = useState('')
	const [descr, setDescr] = useState('')
	const [time, setTime] = useState('')
	const addNewPost = function(e) {
		e.preventDefault()
   const newPost = {
	id: Date.now(),
	title,
	descr,
	time
   }
   setPosts([...posts, newPost])
   setTitle('')
   setDescr('')
   setTime('')
	}

return(
<div>
	<div className="container">
	<div className="title"><h1>Список дел</h1></div>
	<form className="form_cont" >
		<label for="new_item" style={{padding:"10px"}}>Добавить задачу</label>
		<input
		value={title}
		onChange = {e => setTitle(e.target.value)}
		type="text" name="new_item" required placeholder="Вписать задачу"
		style={{width:"100%",height:"30px"}}
		/>
		<div className="descr_item_cont">
		<label for="new_item_descr" style={{padding:"10px"}}>Описание</label>
		<input 
				value={descr}
				onChange = {e => setDescr(e.target.value)}
		type="text" name="new_item_time" required="required" placeholder="Описание задачи"
		style={{width:"50%",height:"30px"}}
		/>
			<label for="new_item_time" style={{padding:"10px"}}>Срок исполнения</label>
		<input
		value={time}
		onChange = {e => setTime(e.target.value)}
		 type="time" name="new_item_time" required="required"
		style={{width:"20%",height:"30px"}}
		/></div>
		<button className="new_item_btn"  onClick={addNewPost}>Добавить</button>
	</form>
	<PostList posts={posts}/>
	
	</div>
</div>

)


}
export default Form;