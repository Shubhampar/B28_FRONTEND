import React, { useState } from 'react'

export const Signup = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    

    const handleSubmit=()=>{
       const userData={
        username,email,password
       }
       console.log(userData)
       fetch("https://bored-puce-cuff.cyclic.cloud/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
       }).then(res=>res.json())
       .then(res=>console.log(res))
       .catch(err=>console)
       setUsername("")
       setEmail("")
       setPassword("")
       

       window.location.href = '/login';
    }
    
  return (
    <div>
        <h3>Registration Form</h3>
        <label htmlFor='username'>Username</label>
        <br/>
        <input type='text' name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <label htmlFor='email'>Email</label>
        <br/>
        <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Sign up</button>
    </div>
  )
}
