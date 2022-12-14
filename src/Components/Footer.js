import React from 'react'

const Footer = () => {
  return (
    <div>   
<footer className='bg-blue-900 h-32  w-screen'>
  {/* <div className='container m-auto'> */}
  <h1 className='md:text-3xl  text-center  text-white my-1'>Save time, save money!</h1>
  <p className='md:text-xl  text-center text-white'>Sign up and we'll send the best deals to you</p>
  <div className='flex justify-center '>
    <br/>
  <input type='search' className='text-center md:h-10 w-64 my-2 ' placeholder='your email'/>
    <br/>
  <button className='rounded-sm  my-2 hover:bg-blue-500 bg-blue-800 text-white-1200 text-white border-solid border-2 md:h-10 w-32'>Subscribe</button>

  </div>
  {/* </div> */}
</footer>
    </div>
  )
}

export default Footer