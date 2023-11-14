 import React, { useState } from 'react'
 import Mypic from './Mypic.png'
 import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { AiOutlineRight} from "react-icons/ai";
import { FcAbout ,FcBusinessContact} from "react-icons/fc";
import { AiFillHome ,AiFillProject} from "react-icons/ai";
import { ImMenu ,ImCancelCircle} from "react-icons/im";
import { GiSkills} from "react-icons/gi";
import { Link } from 'react-scroll';

 export default function Home() {
    const [toggle,seToggle]=useState(false)
    const [typeEffect]=useTypewriter({
        words:['Full-Stack Developer.','Front-End Developer.','Back-End Developer.'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
  return (
    
    <>
    
    
    <div name="home" className='h-full md:h-screen w-full bg-slate-300'>
        <div >
            
            <div  className='flex justify-between w-full md:fixed shadow-sm h-16 fixed'>
                <h1 className=' text-transparent md:text-black text-4xl font-signature ml-8 my-auto  font-bold'>Imran</h1>
                <div className='hidden md:flex flex-row  '> 
            <ul className='flex flex-row  font-semibold '>
                
                   <Link to='home' smooth duration={500}>
                  <li  className='p-3 cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><AiFillHome className='item-center                  mx-auto ' size={30} color='brown'/>Home</li></Link> 
                  <Link  to='about'smooth duration={500}>
                  <li className='p-3 cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><FcAbout className='item-center                  mx-auto'  size={30}/>About</li></Link>
                  <Link to='experience' smooth duration={500}>
                  <li className='p-3 cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'>
                    <GiSkills className='item-center mx-auto' color='blue'  size={30}/>Experince</li></Link>
                    <Link to='contact'smooth duration={500}>
                  <li className='p-3 cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><FcBusinessContact  className='item-center mx-auto'  size={30}/>Contact</li></Link>
                  <Link to='portfolio'smooth duration={500}>
                  <li className='p-3 cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><AiFillProject className='item-center mx-auto' size={30} color='green'/>Project</li></Link>
         </ul>

            </div>
            <div className='md:hidden lg:hidden mt-2 mr-2'>
                {
                   !toggle? <ImMenu onClick={()=>seToggle(true)} className='cursor-pointer'/>:<ImCancelCircle onClick={()=>seToggle(false)} className='cursor-pointer float-right overflow-auto'/>
                }
                {
                    toggle?
                    <ul className='flex flex-col font-semibold bg bg-white  p-2 '>  
                
                   <Link to='home' onClick={()=>seToggle(!toggle)} smooth duration={500}>
                  <li  className='p-3 cursor-pointer flex flex-row hover:bg-slate-400 hover:rounded-md duration-300'><AiFillHome className='item-center                  mx-auto ' size={15} color='brown'/>Home</li></Link> 
                  <Link  to='about' onClick={()=>seToggle(!toggle)} smooth duration={500}>
                  <li className='p-3 flex flex-row cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><FcAbout className='item-center                  mx-auto'  size={15}/>About</li></Link>
                  <Link to='experience' onClick={()=>seToggle(!toggle)}  smooth duration={500}>
                  <li className='p-3 flex flex-row cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'>
                    <GiSkills className='item-center mx-auto' color='blue'  size={15}/>Experince</li></Link>
                    <Link to='contact' onClick={()=>seToggle(!toggle)} smooth duration={500}>
                  <li className='p-3 flex flex-row cursor-pointer hover:bg-slate-400 hover:rounded-md duration-300'><FcBusinessContact  className='item-center mx-auto'  size={15}/>Contact</li></Link>
                  <Link to='portfolio' onClick={()=>seToggle(!toggle)} smooth duration={500}>
                  <li className='p-3 cursor-pointer flex flex-row hover:bg-slate-400 hover:rounded-md duration-300'><AiFillProject className='item-center mx-auto' size={15} color='green'/>Project</li></Link>
         </ul>
                    :null
                }
            </div>
            </div>
            
           
        </div>
        

       <div className='max-w-screen-lg mx-auto flex  items-center justify-center h-full flex-col px-4 md:flex-row'>
       <div className='flex flex-col justify-center mx-auto h-[200px] w-[200px] md:h-full md:w-full' >
            <img src={Mypic} alt="ppr" className=' mx-auto  w-[82.66%] lg:mx-auto'/>
        </div>
        <div className='flex flex-col justify-center   mx-auto px-4 py-4 rounded-xl bg-slate-300 ' >
            <h2 className='text-4xl sm:text-7xl font-bold lg:mx-auto'>I'm a <span className='text-3xl' >{typeEffect}</span></h2>
            <p className='py-4 max-w-md]'>
            👋 Hello there! I'm Imran Mondal, a passionate Full Stack Developer and UI/UX Designer with a knack for crafting seamless digital experiences. With a solid background in React, Java, JavaScript, and a myriad of other technologies, I've been navigating the dynamic world of web development for the past two years.
            </p>
            <div>
            <Link to='portfolio' smooth duration={500} className='text-white  hover:scale-105 duration-300 shadow-md  group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300 '>
                <AiOutlineRight className='ml-1'/>
                </span>
            </Link>
            </div>
        </div>
        
       </div>
    </div>
    </>
    

  ) 
 }
