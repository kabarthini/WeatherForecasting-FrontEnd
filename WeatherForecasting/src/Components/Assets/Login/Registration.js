import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Registration.css';
import Home from './Home';

export default function Registration() {
  const[username,setUsername]=useState(''); 
  //const[lastName,setLastName]=useState(''); 
  const[emailid,setEmail]=useState('');
  const[mobileno,setMobileno]=useState('');
  const[password,setPassword]=useState(''); 
    //const[confirmPassword,setConfirmassword]=useState('');
    const navigate=useNavigate();

    const details={username,emailid,password,mobileno}
     
    const formHandler =async(e) =>{
      e.preventDefault();
   
  if(emailid.length===0 && password.length===0 && username.length===0 )
  {
    alert("Enter All the fields")
  }
  else
  {
    await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
    navigate("/")
  }
     
      }

 return (
    <div className='body16'>
    
    <div className='predict6'>
    <img src="https://ewscripps.brightspotcdn.com/dims4/default/dc9cb2b/2147483647/strip/true/crop/1920x1080+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F16%2F10%2F1430484545439deb0631e7bc7461%2F2020-weekend-forecast.png" width="800px"></img>
    </div>
    <div className='rectangle26'>
    <div className='head26'>
    <p>Register Now</p>
    </div>
    <div className='form26'>
    <form onSubmit={formHandler}>
    <label htmlFor="text100"></label>
    <input type="text100" placeholder='UserName' value={username} onChange={ (e)=>setUsername(e.target.value)} name='firstname' required/><br/><br/>
    <label htmlFor="text201"></label>
    <input type="email1" placeholder='Email' value={emailid} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="text201" placeholder='MobileNo' value={mobileno} onChange={ (e)=>setMobileno(e.target.value)} name='lastname' required/><br/><br/>
    <label htmlFor="email1"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password' required/><br/><br/>
    <button type='submit1' class='button1'>Register</button>
    </form>
    <div className='rk6'><p>or</p></div>
    <br/><Link to="/"><div className='p16'><p>Log In</p></div></Link>
    </div>
    </div>
    </div>
  )
}
