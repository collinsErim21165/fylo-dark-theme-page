import React from 'react'
import img from '../design/images/illustration-intro.png'

const Section1 = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center bg-[rgb(24,32,44)] pb-10 text-white'>
      <img src={img} className='w-3/5 md:h-96 h-60 pt-6 pb-5 md:pt-0 md:pb-0' alt="" />
      <h1 className='text-4xl font-bold pb-5 pt-3'> All your files in one secure location, <br /> accessible anywhere.</h1>
      <p className='pb-5 hidden md:flex'> Fylo stores all your most important files in one secure location. <br /> Access them wherever 
  you need, share and collaborate with <br /> friends family, and co-workers.</p>
      <p className='pb-5 flex md:hidden'> Fylo stores all your most important files in one secure location.  Access them wherever 
  you need, share and collaborate with  friends family, and co-workers.</p>

      <button className='w-60 hover:bg-[rgb(157,215,232)] h-14 rounded-full bg-[rgb(91,214,216)] text-white'>Get Started</button>
    </div>
  )
}

export default Section1