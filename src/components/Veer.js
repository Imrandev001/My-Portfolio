import React from 'react'
import Veer1 from "../Demoveer/Veer1.jpg";
import Veer2 from "../Demoveer/Veer2.jpg";
import Veer3 from "../Demoveer/Veer3.jpg";
import Veer4 from "../Demoveer/Veer4.jpg";
import { Link } from 'react-router-dom';
function Veer() {
  return (
    <div className='md:h-screen flex flex-col w-full items-center justify-center bg-slate-300'>
    <div className='h-10  flex items-center justify-center py-2 mb-6'><h1 className='md:text-4xl shadow-lg bg-slate-300 font-bold mt-6'>Demo of Veer Champ Application:-</h1></div>
    
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:w-2/3 w-full py-6 '>
     <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8  px-6 sm:px-0 font-bold '>
     <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Veer1} alt="veer img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Veer2} alt="veer img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Veer3} alt="veer img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Veer4} alt="veer img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
          </div>
          <Link className='text-white  bg-black px-6 py-3 my-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300' to='/contact' >For Source Code Please Contact ME</Link>
     </div>
  </div>
  )
}

export default Veer
