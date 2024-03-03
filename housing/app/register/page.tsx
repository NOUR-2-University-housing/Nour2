"use client"
import React, { useState } from 'react';
import { register_me } from '@/lib/apiCalls';

 
function register() {
 const [firstname,setFirstName]=useState("")
 const  [lastName,setLastName]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

const handleRegister = async ()=>{
try {
 const res= await register_me(email,password,firstname,lastName)
 console.log(res)
}
catch (err) {
console.log(err)
}

}
  return (
    <div>
      <input type="text"  placeholder='Firstname' onChange={(e)=>{setFirstName(e.target.value)}}/>
         <input type="text" placeholder='Lastname'  onChange={(e)=>{setLastName(e.target.value)}}/>
       <input type="text" placeholder='email'  onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="text" placeholder='password'   onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleRegister}>register</button>
    </div>
  )
}

export default register
