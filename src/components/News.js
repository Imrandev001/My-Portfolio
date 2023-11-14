import React from 'react'
import { Link } from 'react-router-dom'
function News() {
  return (
    <div>
      <div className="flex flex-col min-h-screen justify-center items-center">
  <h1 className='text-4xl font-bold '>This Web Application demo is currently unavailable.</h1>
  <Link className='text-white  bg-black px-6 py-3 w-fit my-10 mx-auto flex items-center rounded-md hover:scale-110 duration-300' to='/' >Back to Homepage</Link>
</div>

    </div>
  )
}

export default News
 