import React from 'react'
import './login.css'
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className='login-container'>
        <div className='login-wrapper'>
        <div className='login-card'>
            <h1>Login</h1>
            <button><FaGoogle/> Continue with Google</button>
        </div>
        </div>
    </div>
  )
}
