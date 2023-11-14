import React from 'react'
import { FaLinkedin} from "react-icons/fa";
import { AiFillFacebook,AiFillInstagram,AiFillGithub} from "react-icons/ai";
import { SiPubg} from "react-icons/si";


export default function Soccial() {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
     <ul>
        <li className='flex justify-between items-center w-40 h-10 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
            <a href="https://www.linkedin.com/in/imran-mondal-a4884b298/" target='_blank' className='flex justify-between items-center w-full text-white'><>LinkedIn < FaLinkedin size={25}/></></a> 
        </li>
        <li className='flex justify-between items-center w-40 h-10 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
            <a href="https://www.facebook.com/imran.developer.01/"  target='_blank' className='flex justify-between items-center w-full text-white'><>Facebook < AiFillFacebook size={25}/></></a> 
        </li>
        <li className='flex justify-between items-center w-40 h-10 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
            <a href="https://www.instagram.com/me_imrann/" target='_blank' className='flex justify-between items-center w-full text-white'><>Instagram < AiFillInstagram size={25}/></></a>  
        </li>
        <li className='flex justify-between items-center w-40 h-10 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
            <a href="" className='flex justify-between items-center w-full text-white'><>PUBG< SiPubg size={25}/></></a> 
        </li>
        <li className='flex justify-between items-center w-40 h-10 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
            <a href="https://github.com/Imrandev001" target='_blank' className='flex justify-between items-center w-full text-white'><>Github< AiFillGithub size={25}/></></a> 
        </li>
     </ul>
    </div>
  )
}
