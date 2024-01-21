import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid'
import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import Mobilenav from './mobilenav'

export default function Navbar({openNav}:propTypes) {
  return (
    <div className='w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%] '>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] font-bold text-white'>UK
                <span className='text-yellow-300'></span>
            </h1>
            <div className='nav-links'>Home</div>
            <div className='nav-links'>Services</div>
            <div className='nav-links'>About</div>
            <div className='nav-links'>Project</div>
            <div className='nav-links'>Blog</div>
            <div className='nav-links'>Contact</div>

            <div onClick={ openNav}>
              
              <Bars3BottomLeftIcon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>  
              
                    
            </div>   
        </div>
        
    </div>
  )
}
