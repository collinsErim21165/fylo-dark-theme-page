import React from 'react'
import Quotes from '../design/images/bg-quotes.png'
import Person1 from '../design/images/profile-1.jpg'
import Person2 from '../design/images/profile-2.jpg'
import Person3 from '../design/images/profile-3.jpg'

const Section4 = () => {
  return (
    <div className='pt-20 pb-52  bg-[rgb(21,30,43)] text-white'>
        <div>
            <img className='md:pl-7 pl-16' src={Quotes} alt="" />
        </div>
        <div  className='flex flex-col md:flex-row items-center justify-center gap-10 z-10 -mt-4'>
            <div id='first' className='flex bg-[rgb(24,32,44)] flex-col rounded items-center justify-center gap-3 h-44 w-80 '>
                <p> Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has 
  become a well-oiled <br /> collaboration machine.</p>
                <div className='flex flex-row items-center  justify-center gap-6 pr-14'>
                    <img src={Person1} className='h-10 w-11 rounded-full' alt="" />
                    <div>
                        <h3> Satish Patel</h3>
                        <p> Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
            <div id='second'  className='flex flex-col items-center rounded justify-center gap-3 h-44 w-80 bg-[rgb(24,32,44)]'>
            <p> Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has 
  become a well-oiled <br /> collaboration machine.</p>
                <div className='flex flex-row items-center  justify-center gap-6 pr-14'>
                    <img src={Person2} className='h-10 w-11 rounded-full' alt="" />
                    <div>
                        <h3> Bruce McKenzie</h3>
                        <p> Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
            <div id='third'  className='flex flex-col rounded items-center justify-center gap-3 h-44 w-80 bg-[rgb(24,32,44)]'>
            <p>Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has 
  become a well-oiled <br /> collaboration machine.</p>
                <div className='flex flex-row items-center  justify-center gap-6 pr-14'>
                    <img src={Person3} className='h-10 w-11 rounded-full' alt="" />
                    <div>
                        <h3> Iva Boyd</h3>
                        <p> Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4