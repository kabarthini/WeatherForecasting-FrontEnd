import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import Home from './Home';

import {useSelector} from 'react-redux'
import { selectUser } from './Redux/userSlice';
export default function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    <div className="body671">
    <Home/>
   
    <div className="paraa11">
    <p>Find Weather Forecast</p>
    </div>
    <div className='rectangle11'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3phqicZUIp0GEt5oWWMNzRNY6vOLzKMfbDQ&usqp=CAU" height="90px" width="90px"/>
    <div className='p1'><p>Listen to the rythm of the falling rain</p></div>
    </div>
    <div className='rectangle21'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xbznbdIziamQo-5U24HcIW4r8HQAAGsNLQ&usqp=CAU" height="90px" width="90px"/>
    <div className='p2'><p>Summer time is always the best of what might be</p></div>
    </div>
    <div className='rectangle31'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7ydJxtkK7uI8dC_5Zva5i5bhGVefjvL5mA&usqp=CAU" height="90px" width="90px"/>
    <div className='p3'><p>Every leaf speaks bliss to me,fluttering from the autumn tree</p></div>
    </div>
    <div className='rectangle41'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yt108eLdJr0c2FsB27D803HNUn0XI3PK5Q&usqp=CAU" height="90px" width="90px"/>
    <div className='p4'>Every winter has its spring</div>
    </div>
    <div className='img661'>
    <img src="https://media.istockphoto.com/id/481122779/vector/weather-forecast.jpg?s=612x612&w=0&k=20&c=LtHlYiqjrXWsbAsAGgF3S87GRq-bUYVsVUWDTzqkO74=" height="700px" width="800px"/>
    </div>
    <div className='img771'>
    <img src="https://4kwallpapers.com/images/wallpapers/sunny-day-daytime-landscape-sun-rays-river-mountains-5k-8k-2048x2048-572.jpg" height="250px" width="250px"/>
    </div>
    <div className='img881'>
    <img src="https://cdn.pixabay.com/photo/2019/11/06/15/12/rainy-day-4606378_640.jpg" height="250px" width="250px"/>
    </div>
    <div className='img991'>
    <img src="https://t4.ftcdn.net/jpg/05/16/16/25/360_F_516162554_pUcdbmBlmobv0IS6G6Ke20WU9XjutCwq.jpg" height="250px" width="250px"/>
    </div>
    <div className='celcius1'>
    <img src="https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif" height="500px" width="600px"/>
    </div>
    <div className='p221'>
    <h4>Weather Forecast</h4>
    </div>
    <div className='p111'>
    <p>Forecasting the weather involves recording <br/>the ongoing measurements of temperature, <br/>pressure, precipitation, wind speed, and the amount of <br/>cloud cover, and giving those current readings <br/>and reports to the public.The reports of the current <br/>conditions are then used to predict the <br/>weather further out.</p>
    </div>
    <div className="Footer1">
   
    <div className="row1">
    <div className="col-md-6 col-lg-5 col-12 ft-11">
       <h3><span>WEATHER</span>CAST</h3>
       <p><br/>A Change in the Weather is sufficient to <br/>recreate the world and ourselves!</p> 
       <div className='footer-icons1'>
       <Link to='https://www.facebook.com/'><span ><AiIcons.AiFillFacebook/></span></Link>
       <Link to='https://www.twitter.com/'><span ><BsIcons.BsTwitter/></span></Link>
       <Link to='https://www.instagram.com/'><span ><BsIcons.BsInstagram/></span></Link>
       <Link to='https://www.linkedin.com/in/'><span ><AiIcons.AiOutlineLinkedin/></span></Link>
          </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-21">
    <h5>Quick Links</h5>
    <ul>
      <li className="nav-item1"> 
      <Link to="/navbar">Home</Link>
      </li>
      <li className="nav-item1"> 
      <Link to="/">Login</Link>
      </li>
      <li className="nav-item1"> 
      <Link to="/register">Register</Link>
      </li>
      <li className="nav-item1"> 
      <Link to="/">LogOut</Link>
      </li>
    </ul>
    </div>
    <div className="contact">
     <h4>Contact Info</h4>
     <p>+91 9121324083</p><br/>
     <p>weathercast@gmail.com</p><br/>
     <p>Coimbatore, India.</p>
    </div>

   

    </div>
    </div>
    <div className="Last-footer1">
    <p>Design By Weather Cast</p>
    </div>
    </div>
    </div>
  
  )
}
