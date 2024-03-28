import React, { useState} from "react";
import "./Feedback.css"; 
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Feedback() {
  const[name,setName]=useState('');
  const[weather,setWeather]=useState('');
  const[forecast,setForecast]=useState('');
  const[communication,setCommunication]=useState('');

  const details={name,weather,forecast,communication};
  const navigate=useNavigate();

  const formHolder=async(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/auth/postfeedback",details)
    navigate("/navbar");
  }
  return (
    <div>
    
       <div class="bgimg">
       <Home/>
       <img src="https://media.licdn.com/dms/image/D4D12AQEdt3983xbQXA/article-cover_image-shrink_720_1280/0/1669913943758?e=2147483647&v=beta&t=pGNLudVMACivG5RRnnJnrIe3UAxQXmhSvHH-YugG1kw"  height="1000px" width="2336px"></img>
       </div>

       <div class="rectangle666"></div>
       <div class="head666">
       <p>FEED BACK</p>
       </div>
       
       

       <div class="form666">
        <form onSubmit={formHolder}>
              <lable for="name">1.Name? </lable>
              <br/>
              <br/>
              <input type="text6666" value={name} onChange={(e)=>setName(e.target.value)} required/>
              <br/>
              <br/>
              <label for="sas">2.Are there any challenges or issues you've encountered while using our app?</label>
              <br/>
              <input type="text6666" value={weather} onChange={(e)=>setWeather(e.target.value)} required/>
              <br/>
              <br/>
              <lable for="better">3.Are there any specific features or information you think our app is missing that would improve your experience?</lable>
              <br/>
              <br/>
              <input type="text6666" value={forecast} onChange={(e)=>setForecast(e.target.value)} required/>
              <br/>
              <br/>
              <label for="rate">4.How would you describe your overall experience with our app?</label>
              <br/>
              <input type="text6666" value={communication} onChange={(e)=>setCommunication(e.target.value)} required/>
              <br/>
              <br/>
              <div class="but666">
              <button class="kabar666" type="submit">SUBMIT</button>
              </div>
              </form>
              
       </div>

    </div>
 );

}

export default Feedback;