import React, { useState } from 'react'


export const Note = () => {
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[category,setCategory]=useState("")
    

    const handleSubmit=()=>{
        const noteData={
            title,body,category
        }
        fetch("https://bored-puce-cuff.cyclic.cloud/posts/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(noteData)
       }).then(res=>res.json())
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
       setTitle("")
       setBody("")
       setCategory("")

       window.location.href = '/notes';
       
    }
  return (
    <div>
        <h3>Add Notes</h3>
        <label htmlFor='title'>Title</label>
        <br/>
        <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <label htmlFor='body'>Body</label>
        <br/>
        <input type='text' name='body' value={body} onChange={(e)=>setBody(e.target.value)}/>
        <br/>
        <label htmlFor='category'>Category</label>
        <br/>
        <input type='text' name='category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Post</button> 
    </div>
  )
}
