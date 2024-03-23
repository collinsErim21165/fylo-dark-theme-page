import React from 'react';
import Security from '../design/images/icon-security.svg';
import Collab from '../design/images/icon-collaboration.svg';
import File from '../design/images/icon-any-file.svg';
import Phone from '../design/images/icon-access-anywhere.svg';

const Section2 = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center text-white pb-11 bg-[rgb(21,30,43)] gap-10'>
        <div className='flex flex-col md:flex-row items-center pt-8 justify-center gap-12'>
          <div className='flex flex-col items-center justify-center'>
            <img src={Phone} alt="" />
            <h3 className='font-bold pt-4 '> Access your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer <br /> to access your account means your 
  files follow you <br /> everywhere.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src={Security} alt="" />
            <h3 className='font-bold pt-4 '> Security you can trust</h3>
            <p className='pl-2 pr-2 md:pl-0 md:pr-0 text-center'> 2-factor authentication and user-controlled encryption are <br className='hidden md:flex' /> just a couple of the security 
  features we allow to help <br className='hidden md:flex'/> secure your files.</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center pt-8 justify-center gap-14'>
          <div className='flex flex-col items-center justify-center'>
          <img src={Collab} alt="" />
            <h3 className='font-bold pt-4 '> Real-time collaboration</h3>
            <p>  Securely share files and folders with friends, family and <br /> colleagues for live collaboration. 
  No email attachments <br /> required.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src={File} alt="" />
            <h3 className='font-bold pt-4 '>Store any type of file</h3>
            <p> Whether you're sharing holidays photos or work <br /> documents, Fylo has you covered allowing for all 
  file <br /> types to be securely stored and shared.</p>
          </div>
        </div>
    </div>
  )
}

export default Section2