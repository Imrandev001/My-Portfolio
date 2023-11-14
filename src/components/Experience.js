import React from 'react'
import Html from "../assets/Html.png"
import Javascrpt from '../assets/Javascript.png'
import Tailwindcss from '../assets/TailwindCss.png'
import ReactJs from '../assets/ReactJs.png'
import Laravel from '../assets/Laravel.png'
import Bootstrap from '../assets/Bootstrap.png'
import Java from '../assets/Java.png'
function Experience() {
  return (
    <div name='experience'  className='bg-slate-300 w-full
    md:h-screen '> 
       <div className='p-4 max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font bold inline border-b-4 font-bold border-gray-500'>Experince</p>
            <p className='py-6'>These are the technalogies i have worked on:</p>
          </div>
          <div className='grid w-[100%] text-center sm:grid-cols-4 grid-cols-2 gap-8 px-12 sm:px-0 font-bold '>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-orange-500 '>
              <img src={Html} alt="html" className='w-20 mx-auto' />
              <p>HTML</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-yellow-500'>
              <img src={Javascrpt} alt="javascript" className='w-20 mx-auto' />
              <p>Javascript</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-white '>
              <img src={Tailwindcss} alt="tailwindcss" className='w-20 mx-auto' />
              <p>Tailwind Css</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-sky-500 '>
              <img src={ReactJs} alt="react" className='w-20 mx-auto' />
              <p>React</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-red-500 '>
              <img src={Laravel} alt="laravel" className='w-20 mx-auto' />
              <p>Laravel</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-violet-600 '>
              <img src={Bootstrap} alt="bootstrap" className='w-20 mx-auto' />
              <p className=' mt-3'>Bootstrap</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg shadow-red-900 '>
              <img src={Java} alt="java" className='w-20 mx-auto' />
              <p>Java</p>
            </div>
            
          </div>
       </div>
    </div>
  )
}

export default Experience
