import React ,{useState} from 'react'
import './Contactus.css';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';

export default function Contactus()
 
{
  const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobileNo] = useState("");
    const [message, setMessage] = useState("");
    const details={firstname,lastname,email,mobileno,message};
    const navigate=useNavigate();

    const formHolder =async(e) =>{
      e.preventDefault();
  
  if(firstname.length===0 && lastname.length===0 && email.length===0)
  {
    alert("Enter username and emaild")
  }
  else
  {
    axios.post("http://localhost:8080/auth/postContact",details)
    navigate("/navbar");
  }
  }
  return (
    <div>
    <Home/>
    <div>
 
    <div className='contactfull'>
    
       <form onSubmit={formHolder}>
           <h1>Contact Us Form</h1>
           <input type="text" id="firstName" placeholder="First Name" required value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
           <input type="text" id="lastName" placeholder="Last Name" required value={lastname} onChange={(e) => setLastName(e.target.value)}/>
           <input type="email" id="email" placeholder="Email"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
           <input type="text" id="mobile" placeholder="Mobile Number" required  value={mobileno} onChange={(e) => setMobileNo(e.target.value)}/>
           <h4>Type Your Message Here...</h4>
           <textarea type="text" name="" value={message} onChange={(e)=>setMessage(e.target.value)} required="required"/>
           <input type="submit" value="Send" id="contact_button"/>
       </form>
    </div>
    </div>
   
    </div>
  )
}