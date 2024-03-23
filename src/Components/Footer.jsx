import React from 'react'
import Logo from '../design/images/logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Location from '../design/images/icon-location.svg';
import Telephone from '../design/images/icon-phone.svg';
import Email from '../design/images/icon-email.svg';


const Footer = () => {
  return (
    <div id='Footer'  className='flex flex-col text-white items-start pt-10 justify-center bg-[rgb(24,32,44)]  pl-7 pr-7 gap-10 pb-11' >

        <img src={Logo} className='w-32' alt="" />
        <div  className='flex flex-col gap-9 md:flex-row items-start justify-between'>
            <div id='footer1'>
                <div className='flex flex-row items-start gap-5 justify-center'>
                  <img src={Location} alt="" />
                <p> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et 
                  dolore magna aliqua</p>
                </div>
            </div>
            <div id='footer2'>
                <div className='flex flex-row items-center justify-center gap-4' >
                    <img src={Telephone} alt="" />
                    +1-543-123-4567
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <img src={Email} alt="" />
                    example@fylo.com
                    </div>
            </div>
            <div id='footer3' className='flex flex-col items-center justify-center gap-4'>
                <a href="#"  className='hover:font-bold'>About Us</a>
                <a href="#"  className='hover:font-bold'>Jobs</a>
                <a href="#"  className='hover:font-bold'>Press</a>
                <a href="#"  className='hover:font-bold'>Blog</a>
            </div>
            <div id='footer4' className='flex flex-col items-center justify-center gap-4'>
                <a href="#" className='hover:font-bold'>Contact Us</a>
                <a href="#"  className='hover:font-bold'>Terms</a>
                <a href="#"  className='hover:font-bold'>Privacy</a>
            </div>
            <div id='footer5' className='flex md:flex-row flex-row items-center justify-center gap-4'>
            <a href="#" className="hover:text-blue-600 transition duration-300 ease-in-out">
              <FaFacebook size={24} />
             </a>
            <a href="#" className="hover:text-pink-600 transition duration-300 ease-in-out">
             <FaInstagram size={24} />
             </a>
           <a href="#" className="hover:text-blue-400 transition duration-300 ease-in-out">
            <FaTwitter size={24} />
             </a>
            </div>
        </div>
         </div>
  )
}

export default Footer