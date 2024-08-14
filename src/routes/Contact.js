import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


export default function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cname ="hero-about"
        HeroImg="https://images.unsplash.com/photo-1551806235-6692cbfc690b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title ="Contact"
        
       />
       <ContactForm/>
       <Footer/>
   </>
  )
}
