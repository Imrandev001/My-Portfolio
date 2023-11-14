import React from 'react'

import { FaLinkedin} from "react-icons/fa";
import { AiFillFacebook,AiFillInstagram,AiFillGithub} from "react-icons/ai";


function Contact() {
  return (
    <div name='contact' className=' bg-slate-300 w-full h-screen md:h-screen'>
     
      <div className='flex flex-col px-4 pb-6 md:pt-24 mt-0 justify-center  h-full max-w-screen-lg mx-auto'>
      
        <div>
            <p className='text-4xl font-bold inline border-b-4  border-gray-400'>Contact</p>
            <p className='py-6 text-2xl font-bold'>Submit the form below to get in touch with me:-</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/4680ded9-16f0-4d0a-a79a-11bcd59482df" method='POST'  className='flex flex-col w-full px-14 lg:w-[40%]'>
            <input type="text" name='namme' placeholder='Enter your name' className='p-2 bg-transparent border-black    border-2 rounded-md focus:outline-none  '/>
            <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md focus:outline-none border-black my-4 '/>
            <textarea name="message"  rows="10" className='p-2 bg-transparent border-2 border-black rounded-md focus:outline-none'></textarea>
           
            <button className='text-white  bg-black px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300' >Let's Talk</button>
            <div className='flex flex-row mt-5 lg:hidden '>
            <a href="https://www.facebook.com/imran.developer.01/"  target='_blank' rel="noreferrer" className='flex flex-col-reverse font-bold   items-center w-full text-[#3b5998]'><> < AiFillFacebook size={25} color='#3b5998'/></></a> 
            <a href="https://www.linkedin.com/in/imran-mondal-a4884b298/" target='_blank' rel="noreferrer" className='flex  flex-col-reverse font-bold   items-center w-full text-[#0072b1]'><> < FaLinkedin size={25} color='#0072b1'/></></a> 
            <a href="https://www.instagram.com/me_imrann/" target='_blank' rel="noreferrer" className='flex flex-col-reverse  font-bold items-center w-full text-red-500 to-yellow-500'><>< AiFillInstagram size={25}/></></a> 
           
            <a href="https://github.com/Imrandev001" target='_blank'rel="noreferrer" className='flex  flex-col-reverse font-bold items-center w-full text-[#171515]'><>< AiFillGithub size={25} color='#171515'/></></a> 



            </div>
            
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
