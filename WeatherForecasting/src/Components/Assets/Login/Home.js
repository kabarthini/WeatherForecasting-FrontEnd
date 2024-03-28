import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Home.css';
import {useSelector} from 'react-redux'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { selectUser } from './Redux/userSlice';
export default function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const navRef = useRef();

  const showNavbar = ()=> {
       navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div>
    
    <header>
  
    <nav ref={navRef}>
    <Link to="/navbar">Home</Link>
    <Link to="/contactus">ContactUs</Link>
    <Link to="/about">AboutUs</Link>
    <Link to="/api">Track Your Weather</Link>
   
    <div className="raan">
    {username}
    </div>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
    </button>
    </header>
   
    <div>
    <input type='checkbox' id="check"/>
    <label for="check">
    <div id='menubar'><FaIcons.FaBars/></div>
    <div id='close'><AiIcons.AiOutlineClose/></div>
    </label>


    <div className="sidebar">
      <h2>My App</h2>
      <ul>
        <li><Link to='/about'><span className='icon'><i class="fa-solid fa-user"></i></span>AboutUs</Link></li>
        <li><Link to="/feedback"><span className='icon'><i class="fa-solid fa-pen"></i></span>Feedback</Link></li>
        <li><Link to="/contactus"><span className='icon'><i class="fa-solid fa-phone"></i></span>ContactUs</Link></li>
        <li><Link to="/faq"><span className='icon'><i class="fa-solid fa-question"></i></span>FAQ</Link></li>
        <li><Link to="/policy"><span className='icon'><i class="fa-solid fa-check"></i></span>Terms</Link></li>
        <li><Link to="/privacy"><span className='icon'><i class="fa-solid fa-lock"></i></span>Privacy</Link></li>
        <li><Link to="/history"><span className='icon'><i class="fa-solid fa-lock"></i></span>History</Link></li>
        
        <li><Link to="/"><span className='icon'><i class="fa-solid fa-right-from-bracket"></i></span>Logout</Link></li>
      </ul>
     
    </div>

</div>



</div>

 
   
    
  )
}

