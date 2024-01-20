"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import { useState } from 'react'
import Mobilenav from './components/mobilenav';
import Hero from './components/hero';
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
      </div>
    </div>
    // hero section
    
  )

}
