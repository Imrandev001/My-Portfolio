import React ,{useState} from 'react'
import Home from "../components/Home";
// import Siderbar from "./components/Siderbar";
import Soccial from "../components/Soccial";

import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Experince from "../components/Experience";
import Contact from "../components/Contact";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Mainpage() {

 const handleOnclick=()=>{
  toast.info("Please contact me for source code",{
    position:"top-center",
    autoClose:1500,
    theme:"colored"
  });
  
 }
  return (
    <div>
      <Home/>
      
      <Experince/>
    <Portfolio handleOnclick={handleOnclick}/>
    <AboutMe/>
    <Soccial/>
    
    <Contact/>
    <ToastContainer />
    </div>
  )
}

export default Mainpage
