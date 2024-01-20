import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    nav:boolean;
    closeNav: ()=>void;
}

export default function Mobilenav({nav,closeNav}:Props) {
console.log(nav)
    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[100%]';
    console.log(navAnimation)
    return (
    <div 
    className={`fixed ${navAnimation} transform transition-all duration-300 top-0  left-0 right-0 bottom-0 z-[10000] bg-[#141c27]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center '>
            <div className='nav-link-mob'>HOME</div>
            <div className='nav-link-mob'>SERVICES</div>
            <div className='nav-link-mob'>ABOUT</div>
            <div className='nav-link-mob'>PROJECT</div>
            <div className='nav-link-mob'>BLOG</div>
            <div className='nav-link-mob'>CONTACT</div>
        </div>
        <div onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 cursor-pointer'>
                <XMarkIcon/>
            </div>
    </div>
  )
}
