import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
            <h1 className='text-[20px] font-bold uppercase text-[#55a6a5] mb-[1rem]'>ABOUT ME </h1>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
            Altering <span className='text-yellow-400'>Visions</span>
            </h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
                <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                <p className='text-[19px] text-slate-300 w-[80%]' >
                Creative, self-starting, and ambitious Front-End Developer with  years of experience, in website development, for both Responsive e-Commerce and portfolio websites plus Mobile applications in fast-paced, collaborative environments.
                </p>    
            </div>  
            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[0.5rem] rounded-md text-[12px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            <p>More</p>
            <ArrowRightCircleIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
          </button>        
            </div>
        <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative '>
            <Image src="/about.jpg" 
            alt='user'
             layout='fill' 
             objectFit='contain' 
             className='relative z-[11] w-[100%] h-[100%] object-cover rounded-s-full'/>
            
            <div className=' lg:absolute w-[50%] h-[100%] z-[2] bg-[#55e6a5] top-[-2rem] right-[5.6rem]'></div>
        </div>
        </div>
    </div>
  )
}
