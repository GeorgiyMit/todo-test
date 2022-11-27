import React from "react";
import { useEffect, useState } from 'react';


const Post = function(props){
const [timer,setTimer] = useState(true)
const [isChecked,setIsChecked] = useState(false);
const [title,setTitle] = useState(props.post.title)
const [descr, setDescr] = useState(props.post.descr)
const [time, setTime] = useState(props.post.time)
const [edit,setEdit] = useState(false)

//Изменение состояния для отметки,что задача выполнена
const handleClick = () =>{
		setIsChecked(current => !current)
	}

//Изменение состояния для кнопки редактирования
	const checkEdit = () => {
		setEdit(current => !current)
	}
	
var now = new Date().toLocaleTimeString().slice(0,-3);

//Обновляет время(сейчас),сравнивает с заданным временем.Если пункт отмечен,не берет в рассчет.Раз в 3 секунды
//После редактирования пункта времени обновляет показатель,если только задача уже не просрочена.Отмечает на минуту позже
useEffect(() => {
	const interval = setInterval(() => { now = new Date().toLocaleTimeString().slice(0,-3);
	var nowTime = time
	if(!isChecked){
	if(now>nowTime)
	{return setTimer(false)}
}}, 3000);
	return () => clearInterval(interval);
  }, [isChecked,time]);


 
//для обычной отрисовки
  if (!edit){
	return(

  <div className="post">
	
  <div className="post_content"
style={{backgroundColor: timer ? (isChecked ? "#93FF93" : ''):("red") }}

   >
<h2>{title}</h2>
	<div className="post_text">
	<span>{props.number}</span>
	<p className="post-descr">
		{descr}
	</p>
	<p>Сделать до <time>{time}</time> </p>
	<input onClick={handleClick}
	 className="post_check"  type="checkbox" name="enabled" />
	</div>
</div>
<div className="post_btns">
	<button onClick={()=> props.remove(props.post)}>Удалить</button>
	<button onClick={checkEdit}>Редактировать</button>
	
	
</div>
<input name="myFile" type="file"/>


  </div>
	)
  }
// если нажали на кнопку редактирования
  return(
    <div className="post">
    <div className="post_content">
    <input type="text" 
    value={title}
	style={{border:"1px solid black"}}
	onChange = {e => setTitle(e.target.value)}
	></input>
      <div className="post_text">
      <span>{props.number}</span>
      <input type="text" className="post-descr"
      value={descr}
	  style={{border:"1px solid black"}}
	  onChange = {e => setDescr(e.target.value)}
        >
      </input>
      <p>Сделать до <input type="time" value={time}
	  style={{border:"1px solid black"}}
	   onChange = {e => setTime(e.target.value)}
	  ></input> </p>
      <input
	  style={{border:"1px solid black"}}
       className="post_check"  type="checkbox" name="enabled" />
      </div>
    </div>
    <div className="post_btns">
      <button onClick={()=> props.remove(props.post)}>Удалить</button>
      <button  onClick={checkEdit}>Сохранить</button>
      
      
    </div>
    <input name="myFile" type="file"/>
      </div>
      )
	
  
}
export default Post;