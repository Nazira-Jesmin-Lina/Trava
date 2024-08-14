import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/test.jpg"
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

export default function About() {
  return (
    <>
      <Navbar/>
      <Hero
        cname ="hero-about"
        HeroImg= {AboutImg}
        // HeroImg="https://images.unsplash.com/photo-1520294891400-6818cdd83ce1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title ="About"
        
       />
      
      <AboutUs/>

       <Footer/>

   </>
  )
}
