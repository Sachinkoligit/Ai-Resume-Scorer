import React from 'react'
import './login.css'
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const handleLogin = async()=>{
    const result = await signInWithPopup(auth, provider);
    const {accessToken, displayName, email, photoURL} = result.user;
    console.log("result",photoURL);
  }
  return (
    <div className='login-container'>
        <div className='login-wrapper'>
        <div className='login-card'>
            <h1>Login</h1>
            <button onClick={handleLogin}><FaGoogle/> Continue with Google</button>
        </div>
        </div>
    </div>
  )
}
