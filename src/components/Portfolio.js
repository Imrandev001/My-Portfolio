import React from 'react'
// import Pct1 from "../assets/Pct1.jpg";
// import Pct2 from "../assets/Pct2.jpg";
import CashKing from "../assets/CashKing.jpeg";
import Ludo from "../assets/Ludo.jpeg";
import { Link } from 'react-router-dom';
import Zuvera from "../assets/Zuvera.png";
import News from '../assets/News.jpg'


export default function Portfolio(props) {
   
  return (

    <div name='portfolio' className='bg-slate-300  w-full md:h-screen '>
      <div  className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'> 
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
            <p className='py-3 text-2xl font-bold'>Check out some my recent work here:-</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 font-bold'>
        <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={CashKing} alt="cashking" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <Link className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105' to='/demo'>Demo</Link>
                    <button onClick={props.handleOnclick} className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={Ludo} alt="ludo" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <Link to='/veer' className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</Link>
                    <button onClick={props.handleOnclick} className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={Zuvera} alt="gg" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <Link to='/zuvira' className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</Link>
                    <button onClick={props.handleOnclick} className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={News} alt="gg" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <Link to='/news' className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</Link>
                    <button onClick={props.handleOnclick}className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
           
            {/* <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={Pct1} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div> */}
            {/* <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={Pct2} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div> */}
            {/* <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={Pct3} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div> */}
            
        </div>
        
      </div>
    </div>
  )
}
