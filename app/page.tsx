"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import { useEffect, useState } from 'react'
import Mobilenav from './components/mobilenav';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Home() {

  const [nav,setNav]=useState(false)
  const openNav =()=>setNav(true);
  const closeNav =()=>setNav(false);
//animtn
useEffect(()=>{

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
},[])



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
