import React from 'react'
import img from '../design/images/illustration-stay-productive.png'
import Arrow from '../design/images/icon-arrow.svg'

const Section3 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 pt-10 pb-10  bg-[rgb(21,30,43)] text-white'>
      <div>
        <img src={img} className='w-96' alt="" />
      </div>
      <div>
        <h2 className='font-bold pl-10 md:pl-0 text-2xl md:text-3xl pb-3'> Stay productive, <br className='md:block hidden' /> wherever you are</h2>
        <p className='pb-4 pl-14 md:pl-0'>Never let location be an issue when accessing <br className='md:hidden block' /> your files. Fylo has you <br className='md:block hidden' /> covered for all of your file <br className='md:hidden block'/> 
  storage needs.</p>
        <p className='pb-5 pl-14 md:pl-0'> Securely share files and folders with friends, <br className='md:hidden block' /> family and colleagues for live <br className='md:block hidden' /> collaboration. No <br className='md:hidden block' /> email 
  attachments required.</p>
        <div className='flex hover:text-white text-[rgb(98,224,217)] md:pl-0 pl-14 flex-row items-center gap-2 cursor-pointer underline'>
           <p>See how Fylo works</p>
           <img src={Arrow}  alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section3