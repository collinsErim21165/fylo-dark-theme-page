import React from 'react'
import Logo from '../design/images/logo.svg'

const Navbar = () => {
  return (
    <div className='bg-[rgb(24,32,44)] pt-5 pb-8  flex flex-row items-center justify-between pl-5 pr-5 md:pl-24 md:pr-20'>
      <div>
        <img src={Logo} className='w-20 md:w-40' alt="" />
      </div>
      <div className='text-white'>
        <a href="#" className='hover:font-bold underline-on-hover'>Features</a>
        <a href="#" className='pl-5 hover:font-bold underline-on-hover'>Team</a>
        <a href="#" className='pl-5 hover:font-bold underline-on-hover'>Sign in</a>
      </div>
    </div>
  )
}

export default Navbar