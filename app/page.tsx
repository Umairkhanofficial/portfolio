"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import { useState } from 'react'
import Mobilenav from './components/mobilenav';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
export default function Home() {

  const [nav,setNav]=useState(false)
  const openNav =()=>setNav(true);
  const closeNav =()=>setNav(false);

  return (
    <div className="overflow-x-hidden">
    <div>
      <Navbar openNav={openNav}/>
       <Mobilenav nav={nav} closeNav={closeNav}/>  
       <Hero/>
       <div className='relative z-[30]'>
        <About/>
        </div> 
      </div>
      <Footer/>
    </div>
    // hero section
    
  )

}
