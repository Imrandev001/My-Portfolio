import React from 'react'
import Zuvira1 from "../Demozuvira/Zuvira1.png";
import Zuvira2 from "../Demozuvira/Zuvira2.png";
import Zuvira3 from "../Demozuvira/Zuvira3.png";
import Zuvira4 from "../Demozuvira/Zuvira4.png";
import { Link } from 'react-router-dom';
function Zuvira() {
  return (
    <div className='md:h-screen flex flex-col w-full items-center justify-center bg-slate-300'>
    <div className='h-10  flex items-center justify-center py-2 mb-6'><h1 className='md:text-4xl shadow-lg bg-slate-300 font-bold mt-6'>Demo of E-Commerce Web Application:-</h1></div>
    
    <div className='  max-w-screen-md p-4 flex flex-col justify-center items-center w-full py-6 '>
     <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8  px-6 sm:px-0 font-bold '>
     <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Zuvira1} alt="zuvira img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Zuvira2} alt="zuvira img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Zuvira3} alt="zuvira img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
              <div className='shadow-md shadow-gray-600 rounded-lg'> 
      <img src={Zuvira4} alt="zuvira img" className='rounded-md duration-200 hover:scale-105' />                
              </div>
          </div>
          <Link className='text-white  bg-black px-6 py-3 my-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300' to='/contact' >For Source Code Please Contact ME</Link>
     </div>
  </div>
  )
}

export default Zuvira
