import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'


export default function Service() {
  return (
    <>
      <Navbar/>
      <Hero
        cname ="hero-about"
        HeroImg="https://images.unsplash.com/photo-1611596916832-1868a23583f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title ="Service"
        
       />
       <Trip/>

       <Footer/>
   </>
  )
}
