"use client"

import React, { useState } from 'react';
import {log_in}  from  "@/lib/apiCalls"
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { updateUserToken,updateUserId} from '@/lib/features/userSlice';

export default function Login() {

    const store = useAppStore();
    const user= useAppSelector((state) => state.user.formData);
    const dispatch = useAppDispatch();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  
    
const handleLog = async  () => {
    try { const h=await log_in(email,password)
   dispatch(updateUserToken(h.token)) 
   dispatch(updateUserId(h.id))}
catch (err) {
    return err
}


}
  
    return (<div>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
        <input type="text"  onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleLog} >Login {user.id}</button> 
    </div>)
  }
  