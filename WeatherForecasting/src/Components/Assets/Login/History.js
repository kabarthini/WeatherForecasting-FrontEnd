import React, { useEffect, useState } from 'react' 
import {Link, useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './History.css'
import Home from './Home';

const History=()=> { 
const username=localStorage.getItem('username');
const [furniturelists, setfurniturelists] = useState([]) 
const {id} =useParams();
const navigate=useNavigate();
useEffect(() => 
{ 
getAllFurniturelist(); 
}, []) 



const getAllFurniturelist = () => {
  fetch(`http://localhost:8080/auth/history?username=${username}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
       if (data && Array.isArray(data)) {
         setfurniturelists(data);
       } else {
         console.error("Invalid or empty JSON data received.");
       }
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 };
 
 


return ( 
   <div className="fulltable">
   <Home/>
   <div className='rectangle78'>
   <p id='order'>Weather Details</p>
   
   </div>
      <br/>
      <br/>
     <table id='gettable'> 
     <thead>
     <tr> 
      
        <th>Location</th> 
        <th>Humidity</th> 
        <th>Temperature</th> 
        <th>Wind</th> 
       
    </tr> 
    </thead>
   <tbody>
       {furniturelists.map((furniturelist)=>(
          <tr key={furniturelist.id}> 
       <td> {furniturelist.city}</td> 
       <td> {furniturelist.humidity}</td> 
       <td> {furniturelist.temp}</td> 
       <td> {furniturelist.wind}</td> 
       
      
    </tr> 
       ))}
       </tbody>
   </table> 
</div> 
)
} 
export default History;