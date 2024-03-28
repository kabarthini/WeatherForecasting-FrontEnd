
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import { login } from './Redux/userSlice';
import { useDispatch } from 'react-redux';
export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] =  useState("");
  const [error,seterror]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const formHandler=async(event)=>
    {
        event.preventDefault();
        try
        {
        if(username.length==0 && password.length==0)
        {
          alert("Enter emailid and password")
        }
        else if(username.length===0)
        {
          alert("Enter Emailid")
        }
        else if(password.length===0)
        {
          alert("Enter Password");
        }
        else if(username && password) {
          dispatch(login(username));
          
          const response=await axios.post("http://localhost:8080/auth/authenticate",{username,password});
      localStorage.setItem("token", response.data.token)
          navigate("/navbar");
        }
      }
      catch(error)
      {
        alert("Incorrect Username and Password.");
      }
       

      }

 
  
  return (
    
    <div className='body'>
    <div class="rectangle">
    <div className='log'><p>Login</p></div>
    <div className='pic'></div>
    <div className='form'>
    <form onSubmit={formHandler}>
    <label htmlFor="username"></label>
    <input type="text" placeholder='Enter your username' value={username} onChange={ (e)=>setUsername(e.target.value)}  required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)}  required/><br/><br/>
   <button type='submit' class='button'>submit</button>
    </form>
    <div className='kk'><p>or</p></div>
    <br/><Link to="/register"><div className='para1'><p>Register Here!</p></div></Link>
 
    </div>
   </div>
    </div>
   
  )
}
