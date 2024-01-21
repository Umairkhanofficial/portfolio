import Particles from './particle'
import React from 'react'
import TextEffect from './texteffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'



export default function Hero() {
  return (
    <div className="h-[88vh] bg-[url('/banner.jpg')] bg-cover">
       <Particles/>
       
    <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
    <div className='w-[400px] hidden  relative lg:flex items-center rounded-full h-[350px]'>
    <Image src="/avatar2.png" alt="avatar" layout="fill" className=' object-cover rounded-full shadow-lg shadow-[#ffff]'/>
    </div>
      <div>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>Hello, I'M  <span className='text-yellow-300'> Umair</span></h1>
        <TextEffect/>
        <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
          Let's Build Something Amazing with Next React & GPT-3 Open AI!
        </p>
        <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
          <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[0.5rem] rounded-md text-[12px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            <p>Download CV</p>
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
          </button>
        </div>
    
      </div>
    

    </div>
    </div>
  )
}
