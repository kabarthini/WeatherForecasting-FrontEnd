import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Assets/Login/Login';
import Registration from './Components/Assets/Login/Registration';
import Navbar from './Components/Assets/Login/Navbar';
import About from './Components/Assets/Login/About';
import Report from './Components/Assets/Login/Report';
import Contactus from './Components/Assets/Login/Contactus';
import Faq from './Components/Assets/Login/Faq';
import React from 'react';
import Feedback from './Components/Assets/Login/Feedback';
import Privacy from './Components/Assets/Login/Privacy';
import Policy from './Components/Assets/Login/Policy';
import Api from './Components/Assets/Login/Api';
import History from './Components/Assets/Login/History';



function App() {
  return (
   
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/navbar" element={<Navbar/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/register" element={<Registration/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/report" element={<Report/>}></Route>
    <Route path="/api" element={<Api/>}></Route>
    <Route path="/contactus" element={<Contactus/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/privacy" element={<Privacy/>}></Route>
    <Route path="/policy" element={<Policy/>}></Route>
    <Route path="/history" element={<History/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
  
}

export default App;