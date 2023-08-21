import React, { useState } from 'react'

export const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
  

    const handleSubmit=()=>{
       const userData={
        email,password
       }
       console.log(userData)
       fetch("https://bored-puce-cuff.cyclic.cloud/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
       }).then(res=>res.json())
       .then((res)=>{
       console.log(res)
       localStorage.setItem("token",res.token)
    })
       .catch(err=>console.log(err))
       setEmail("")
       setPassword("") 

       window.location.href = '/note';
    }
  return (
    <div>
        <h3>Login Form</h3>
        <br/>
        <label htmlFor='email'>Email</label>
        <br/>
        <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label htmlFor='password'>Password</label>
        <br/>
        <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
