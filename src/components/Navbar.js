
import React,{useState} from 'react'
// import Logo from './Logo.png'
import { ImMenu,ImCancelCircle} from "react-icons/im";

export default function Navbar() {
  const [toggle,setToggle]=useState(false);
  return (
    
    // <div className='text-4xl font-bold font-signature '>
    //   Imran
    // </div>
    <div className='flex justify-between items-center w-full h-20 bg-[#40BBBF] text-white px-4 fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Imran</h1>
      </div>
      <ul className='hidden md:flex'>
      <li className='px-4 cursor-pointer font-medium hover:scale-105 duration-200'>Home</li>
      <li className='px-4 cursor-pointer font-medium hover:scale-105 duration-200'>About</li>
      <li className='px-4 cursor-pointer font-medium hover:scale-105 duration-200'>Portfolio</li>
      <li className='px-4 cursor-pointer font-medium hover:scale-105 duration-200'>Contact Us</li>
       </ul>
       <div onClick={()=>setToggle(!toggle)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
       {toggle?<ImCancelCircle size={30}/>:<ImMenu size={30}/>}
       </div>
    </div>
    
     
  )
}
