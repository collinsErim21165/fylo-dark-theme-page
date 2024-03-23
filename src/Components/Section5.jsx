import React, { useState } from 'react'

const Section5 = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            setErrorMessage('');
        }else {
            setErrorMessage('please enter a valid email address.');
        }
    };
  return (
    <div className='bg-[rgb(24,32,44)]  text-white  flex-col flex items-cengter justify-center'>
        <div id='section5' className='flex flex-col shadow-md hover:shadow-lg transition duration-300 ease-in-out rounded-xl    bg-[rgb(21,30,43)] md:ml-24 items-center justify-center text-center md:w-4/5 h-80 md:h-72 '>
        <div>
            <h2 className='font-bold text-4xl pb-3'> Get early access today</h2>
            <p className='pb-2'> It only takes a minute to sign up and our <br className='md:hidden block' /> free starter tier is extremely generous. If <br  className='md:hidden block'/> you have any 
  questions, our support team <br className='md:hidden block' /> would be happy to help you.</p>
        </div>
        <div className='flex md:flex-row  flex-col md:items-start items-center justify-center '>
         <div className='flex-col flex items-start justify-center gap-2'>
          <input type="text" className='md:w-80 w-60 md:h-10 h-12 md:pl-2 pl-6  rounded-full text-black mr-7 '  placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <p style={{color: 'red'}}>{errorMessage}</p>
         </div>
          <button  onClick={validateEmail} className='w-60 hover:bg-[rgb(157,215,232)]  bg-[rgb(91,214,216)] md:h-8 h-12 rounded-full -ml-8 md:-ml-0'>Get Started For Free</button>
        </div>
        </div>
         

         
    </div>
  )
}

export default Section5