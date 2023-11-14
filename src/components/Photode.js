import React from 'react'
import Cash1 from "../Demo/Cash1.jpg";
import Cash2 from "../Demo/Cash2.jpg";
import Cash3 from "../Demo/Cash3.jpg";
import Cash4 from "../Demo/Cash4.jpg";
import Cash5 from "../Demo/Cash5.jpg";
import { Link } from 'react-router-dom';
function Photode() {
  return (
    <div className='md:h-screen flex flex-col w-full items-center justify-center bg-slate-300 '>
      <div className='h-10  flex items-center justify-center py-2 mb-6'><h1 className='md:text-4xl shadow-lg bg-slate-300 font-bold mt-6'>Demo of Cash King Application:-</h1></div>
      
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full py-6 '>
       <div className='grid sm:grid-cols-2 md:grid-cols-5 gap-8  px-6 sm:px-0 font-bold '>
       <div className='shadow-md shadow-gray-600 rounded-lg'> 
        <img src={Cash1} alt="cash img" className='rounded-md duration-200 hover:scale-105' />                
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'> 
        <img src={Cash2} alt="cash img" className='rounded-md duration-200 hover:scale-105' />                
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'> 
        <img src={Cash3} alt="cash img" className='rounded-md duration-200 hover:scale-105' />                
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'> 
        <img src={Cash4} alt="cash img" className='rounded-md duration-200 hover:scale-105' />                
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'> 
        <img src={Cash5} alt="cash img" className='rounded-md duration-200 hover:scale-105' />                
                </div>
               
            </div>
            <Link className='text-white  bg-black px-6 py-3 my-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300' to='/contact' >For Source Code Please Contact ME</Link>
       </div>
    </div>
  )
}

export default Photode
